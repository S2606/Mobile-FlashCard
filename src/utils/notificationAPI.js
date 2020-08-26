import {AsyncStorage} from 'react-native';
import {Notifications} from 'expo';
import * as Permissions from 'expo-permissions';

const NOTIFICATION_KEY = 'notification:mobile-flashcards';

function buildNotification() {
    return {
        title: 'Mobile Flashcards',
        body: "Checkout the new questions today",
        ios: {
            sound: true
        },
        android: {
            sound: true
        },
    };
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then(data => {
            if (!data) {
                Permissions.askAsync(Permissions.NOTIFICATIONS).then(({status}) => {
                    if (status === 'granted') {
                        Notifications.cancelAllScheduledNotificationsAsync().then(() => {
                            let today = new Date();
                            today.setDate(today.getDate());
                            today.setHours(22, 16, 0);
                            // today.setTime(today.getTime() + 2 * 60000);

                            const notification = buildNotification();

                            Notifications.scheduleLocalNotificationAsync(notification, {
                                time: today,
                                repeat: 'day',
                            }).then(result => {

                            });
                        });

                        AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
                    }
                });
            }
        });
}