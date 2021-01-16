var app = {

    load: function() {
        app.handleAddToHomeScreen();
        app.handleConnectionStatus();
        app.installServiceWorker();
        panel.refreshPrices();
    },

    handleConnectionStatus: function() {
		// Triggered when an event happens
		window.addEventListener("online", function() {
			panel.setOnline();
		});
		window.addEventListener("offline", function() {
			panel.setOffline();
		});

		// Set current state
		var online = navigator.onLine;
		if (online) {
			panel.setOnline();
		} else {
			panel.setOffline();
		}
    },

    installServiceWorker: function() {
		// Is service worker supported by browser?
		if ("serviceWorker" in navigator) {
			navigator.serviceWorker.register("/service_worker.js")
				.then(function(registration) {
					console.log("Registration successful, scope is:", registration.scope);
				})
				.catch(function(error) {
					console.log("Service worker registration failed, error:", error);
				});
		}
	},

	handleAddToHomeScreen: function() {
		// Can use this in web statistics
		window.addEventListener("beforeinstallprompt", function(event) {
			console.log("User prompted to install banner");

			event.userChoice.then(function(choiceResult) {
				if (choiceResult.outcome === "accepted") {
					console.log("Added Crypto Ninja to homescreen!");
				}
			});

		});
	}
};