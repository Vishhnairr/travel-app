import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { mockRankings } from '../data/mockData';
import { Ionicons } from '@expo/vector-icons';

export default function RankingsScreen() {
  const theme = useTheme();
  const styles = createStyles(theme);

  const renderRankingItem = ({ item, index }) => {
    const getMedalIcon = (rank) => {
      if (rank === 1) return { name: 'trophy', color: '#FFD700' };
      if (rank === 2) return { name: 'trophy', color: '#C0C0C0' };
      if (rank === 3) return { name: 'trophy', color: '#CD7F32' };
      return null;
    };

    const medal = getMedalIcon(item.rank);

    return (
      <View style={styles.rankingItem}>
        <View style={styles.rankBadge}>
          {medal ? (
            <Ionicons name={medal.name} size={24} color={medal.color} />
          ) : (
            <Text style={styles.rankNumber}>#{item.rank}</Text>
          )}
        </View>
        
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        
        <View style={styles.userInfo}>
          <Text style={styles.username}>{item.name}</Text>
          <Text style={styles.userStats}>@{item.username}</Text>
          <View style={styles.statsRow}>
            <Ionicons name="location" size={14} color={theme.colors.textSecondary} />
            <Text style={styles.statText}>{item.placesVisited} places visited</Text>
          </View>
        </View>
        
        <View style={styles.rankInfo}>
          <Text style={styles.rankLabel}>Rank</Text>
          <Text style={styles.rankValue}>#{item.rank}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Top Travelers</Text>
        <Text style={styles.headerSubtitle}>Ranked by places visited</Text>
      </View>
      
      <FlatList
        data={mockRankings}
        renderItem={renderRankingItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
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
    marginBottom: theme.spacing.xs,
  },
  headerSubtitle: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
  },
  listContent: {
    paddingVertical: theme.spacing.md,
  },
  rankingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    backgroundColor: theme.colors.background,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  rankBadge: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  rankNumber: {
    ...theme.typography.h3,
    color: theme.colors.textSecondary,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: theme.spacing.md,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    ...theme.typography.h3,
    color: theme.colors.text,
    marginBottom: 4,
  },
  userStats: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
    marginBottom: 8,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    ...theme.typography.small,
    color: theme.colors.textSecondary,
    marginLeft: 4,
  },
  rankInfo: {
    alignItems: 'flex-end',
  },
  rankLabel: {
    ...theme.typography.small,
    color: theme.colors.textLight,
    marginBottom: 4,
  },
  rankValue: {
    ...theme.typography.h2,
    color: theme.colors.text,
  },
});

