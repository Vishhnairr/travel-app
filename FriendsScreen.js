import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { mockUsers, mockFriendRequests } from '../data/mockData';
import { Ionicons } from '@expo/vector-icons';

export default function FriendsScreen() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState('friends');
  const [users, setUsers] = useState(mockUsers);
  const [friendRequests, setFriendRequests] = useState(mockFriendRequests);
  const styles = createStyles(theme);

  const handleFriendRequest = (userId, action) => {
    if (action === 'accept') {
      const user = friendRequests.find(u => u.id === userId);
      if (user) {
        setUsers([...users, { ...user, isFriend: true }]);
        setFriendRequests(friendRequests.filter(u => u.id !== userId));
      }
    } else {
      setFriendRequests(friendRequests.filter(u => u.id !== userId));
    }
  };

  const renderFriendItem = ({ item }) => (
    <View style={styles.friendItem}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.friendInfo}>
        <Text style={styles.friendName}>{item.name}</Text>
        <Text style={styles.friendUsername}>@{item.username}</Text>
        <View style={styles.friendStats}>
          <View style={styles.statItem}>
            <Ionicons name="location" size={14} color={theme.colors.textSecondary} />
            <Text style={styles.statText}>{item.placesVisited} places</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="trophy" size={14} color={theme.colors.textSecondary} />
            <Text style={styles.statText}>Rank #{item.rank}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.messageButton}>
        <Ionicons name="chatbubble-outline" size={20} color={theme.colors.primary} />
      </TouchableOpacity>
    </View>
  );

  const renderRequestItem = ({ item }) => (
    <View style={styles.friendItem}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.friendInfo}>
        <Text style={styles.friendName}>{item.name}</Text>
        <Text style={styles.friendUsername}>@{item.username}</Text>
        <View style={styles.friendStats}>
          <View style={styles.statItem}>
            <Ionicons name="location" size={14} color={theme.colors.textSecondary} />
            <Text style={styles.statText}>{item.placesVisited} places</Text>
          </View>
        </View>
      </View>
      <View style={styles.requestActions}>
        <TouchableOpacity
          style={[styles.requestButton, styles.acceptButton]}
          onPress={() => handleFriendRequest(item.id, 'accept')}
        >
          <Ionicons name="checkmark" size={20} color={theme.colors.background} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.requestButton, styles.declineButton, styles.lastRequestButton]}
          onPress={() => handleFriendRequest(item.id, 'decline')}
        >
          <Ionicons name="close" size={20} color={theme.colors.background} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Friends</Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'friends' && styles.activeTab]}
          onPress={() => setActiveTab('friends')}
        >
          <Text style={[styles.tabText, activeTab === 'friends' && styles.activeTabText]}>
            Friends ({users.filter(u => u.isFriend).length})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'requests' && styles.activeTab]}
          onPress={() => setActiveTab('requests')}
        >
          <Text style={[styles.tabText, activeTab === 'requests' && styles.activeTabText]}>
            Requests ({friendRequests.length})
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={activeTab === 'friends' ? users.filter(u => u.isFriend) : friendRequests}
        renderItem={activeTab === 'friends' ? renderFriendItem : renderRequestItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="people-outline" size={48} color={theme.colors.textLight} />
            <Text style={styles.emptyText}>No {activeTab === 'friends' ? 'friends' : 'requests'} yet</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const createStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  headerTitle: {
    ...theme.typography.h1,
    color: theme.colors.text,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  tab: {
    flex: 1,
    paddingVertical: theme.spacing.sm,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    alignItems: 'center',
  },
  activeTab: {
    borderBottomColor: theme.colors.primary,
  },
  tabText: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
  },
  activeTabText: {
    color: theme.colors.primary,
    fontWeight: '600',
  },
  listContent: {
    paddingVertical: theme.spacing.md,
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: theme.spacing.md,
  },
  friendInfo: {
    flex: 1,
  },
  friendName: {
    ...theme.typography.h3,
    color: theme.colors.text,
    marginBottom: 4,
  },
  friendUsername: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
    marginBottom: 8,
  },
  friendStats: {
    flexDirection: 'row',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  statText: {
    ...theme.typography.small,
    color: theme.colors.textSecondary,
    marginLeft: 4,
  },
  messageButton: {
    padding: theme.spacing.sm,
  },
  requestActions: {
    flexDirection: 'row',
  },
  requestButton: {
    marginRight: theme.spacing.sm,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  acceptButton: {
    backgroundColor: theme.colors.success,
  },
  declineButton: {
    backgroundColor: theme.colors.error,
  },
  lastRequestButton: {
    marginRight: 0,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: theme.spacing.xl * 2,
  },
  emptyText: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.md,
  },
});

