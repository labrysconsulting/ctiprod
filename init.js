var appName = "CTI Integration";
var appVersion = "1.0";

ORACLE_SERVICE_CLOUD.extension_loader.load(appName, appVersion).then(function (sdk) {
    sdk.registerUserInterfaceExtension(function (userInterfaceContext) {
        userInterfaceContext.getExtensionBarContext().then(function (extensionBarContext) {
            extensionBarContext.getExtensionBarItem('MediaBar').then(function (extensionBarItem) {
                extensionBarItem.setContentUrl('./index.html');
                extensionBarItem.render();
            });
            extensionBarContext.setDockingPosition("Top");
            extensionBarContext.setDockable(false);
            extensionBarContext.setMaxHeight(68);
            extensionBarContext.render();
        });
    });
});