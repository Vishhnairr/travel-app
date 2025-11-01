# Travel Social - Travel-Focused Social Media App

A beautiful, minimalist travel social media app built with React Native and Expo. Share your travel experiences, connect with fellow travelers, and compete on the leaderboard based on places visited.

## Features

- 📸 **Travel Posts Feed**: Share photos and stories from places you've visited
- 🏆 **Rankings System**: Compete with other travelers based on places visited
- 👥 **Friend System**: Connect with other travelers, send and accept friend requests
- 📊 **Profile Stats**: Track your travel achievements, places visited, and rankings
- 🎨 **Clean UI**: Minimalist design inspired by Beli, focusing on content over clutter
- 📱 **Cross-Platform**: Compatible with both iOS and Android

## Screens

1. **Home**: Feed of travel posts from friends and community
2. **Rankings**: Leaderboard of top travelers ranked by places visited
3. **Friends**: Manage your friends list and friend requests
4. **Profile**: View your profile, stats, and achievements

## Tech Stack

- **React Native** with **Expo**
- **React Navigation** for navigation
- **Expo Vector Icons** for icons
- Custom theme system for consistent styling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (will be installed automatically)
- Expo Go app on your iOS/Android device (for testing)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the Expo development server:
```bash
npm start
```

3. Run on your device:
   - Install the Expo Go app on your iOS/Android device
   - Scan the QR code displayed in the terminal
   - Or use `npm run ios` for iOS simulator or `npm run android` for Android emulator

## Project Structure

```
travel-social-app/
├── App.js                 # Main app component with navigation
├── src/
│   ├── screens/           # Screen components
│   │   ├── HomeScreen.js
│   │   ├── RankingsScreen.js
│   │   ├── FriendsScreen.js
│   │   └── ProfileScreen.js
│   ├── components/        # Reusable components
│   │   └── PostCard.js
│   ├── theme/            # Theme configuration
│   │   └── ThemeContext.js
│   └── data/             # Mock data
│       └── mockData.js
├── assets/               # Images and icons (create these)
├── package.json
├── app.json
└── babel.config.js
```

## Current Status

This is a working prototype with mock data. The app includes:
- Complete navigation system
- All four main screens
- Post feed with like functionality
- Rankings leaderboard
- Friends management
- Profile with stats

## Next Steps

To make this production-ready, you'll need to:

1. **Backend Integration**: Replace mock data with a real backend (Firebase, Supabase, or custom API)
2. **Authentication**: Add user authentication (sign up, login)
3. **Image Upload**: Implement image picker for posts
4. **Location Services**: Add location tagging for posts
5. **Push Notifications**: Notify users of friend requests and likes
6. **Search**: Add search functionality for users and places
7. **Real-time Updates**: Implement real-time feed updates

## Assets

You'll need to create the following assets in the `assets/` folder:
- `icon.png` (1024x1024)
- `splash.png` (1284x2778 for iOS, any size for Android)
- `adaptive-icon.png` (1024x1024)

You can use Expo's asset generator or create them manually.

## License

MIT License - feel free to use this project as a starting point for your own travel social app!

