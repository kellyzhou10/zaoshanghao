"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var ProfilePage = function () {
    // Dummy data for scores and times
    var scores = {
        daily: 85,
        monthly: 1200,
    };
    var times = {
        alarm: '7:00 AM',
        wakeUp: '7:15 AM',
    };
    return (<react_native_1.View style={styles.container}>
      {/* Exit Button (Top Right) */}
      <react_native_1.TouchableOpacity style={styles.exitButton}>
        <react_native_1.Image source={require('./assets/icons/x_icon.png')} // Replace with your icon path
     style={styles.exitIcon}/>
      </react_native_1.TouchableOpacity>

      {/* Profile Image */}
      <react_native_1.Image source={require('./assets/images/profile_image.png')} // Replace with your profile image path
     style={styles.profileImage}/>

      {/* Username */}
      <react_native_1.Text style={styles.username}>JohnDoe123</react_native_1.Text>

      {/* Daily and Monthly Scores */}
      <react_native_1.View style={styles.scoresContainer}>
        <react_native_1.View style={styles.scoreSection}>
          <react_native_1.Text style={styles.scoreTitle}>Daily Score</react_native_1.Text>
          <react_native_1.Text style={styles.scoreValue}>{scores.daily}</react_native_1.Text>
        </react_native_1.View>
        <react_native_1.View style={styles.scoreSection}>
          <react_native_1.Text style={styles.scoreTitle}>Monthly Score</react_native_1.Text>
          <react_native_1.Text style={styles.scoreValue}>{scores.monthly}</react_native_1.Text>
        </react_native_1.View>
      </react_native_1.View>

      {/* Alarm Time and Wake-Up Time */}
      <react_native_1.View style={styles.timeContainer}>
        <react_native_1.View style={styles.timeSection}>
          <react_native_1.Text style={styles.timeTitle}>Alarm Time</react_native_1.Text>
          <react_native_1.Text style={styles.timeValue}>{times.alarm}</react_native_1.Text>
        </react_native_1.View>
        <react_native_1.View style={styles.timeSection}>
          <react_native_1.Text style={styles.timeTitle}>Time Woken Up</react_native_1.Text>
          <react_native_1.Text style={styles.timeValue}>{times.wakeUp}</react_native_1.Text>
        </react_native_1.View>
      </react_native_1.View>
    </react_native_1.View>);
};
// Styles
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000', // Dark mode background
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    exitButton: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    exitIcon: {
        width: 24,
        height: 24,
        tintColor: '#fff', // Optional: Change icon color to white
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60, // Makes the image circular
        marginBottom: 20,
    },
    username: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    scoresContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 30,
    },
    scoreSection: {
        alignItems: 'center',
    },
    scoreTitle: {
        color: '#aaa',
        fontSize: 16,
        marginBottom: 5,
    },
    scoreValue: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    timeContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    timeSection: {
        alignItems: 'center',
        marginVertical: 10,
    },
    timeTitle: {
        color: '#aaa',
        fontSize: 16,
        marginBottom: 5,
    },
    timeValue: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});
exports.default = ProfilePage;
