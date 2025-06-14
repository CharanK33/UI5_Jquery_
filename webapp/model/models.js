sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
],
    function (JSONModel, Device) {
        "use strict";

        return {
            /**
             * Provides runtime information for the device the UI5 app is running on as a JSONModel.
             * @returns {sap.ui.model.json.JSONModel} The device model.
             */
            createDeviceModel: function () {
                var oModel = new JSONModel(Device);
                oModel.setDefaultBindingMode("OneWay");
                return oModel;
            },
            createCarModel: function () {
                return new JSONModel({
                    selectedModel: "R1",
                    launchYears: {
                        R1: "2021",  // adjust year as needed
                        R2: "2024",
                        R3: "2026"
                    },
                    specifications: [
                        { spec: "Length", r1: "200.8 in", r2: "185.6 in", r3: "161.4 in (est)" },
                        { spec: "Width", r1: "79.3 in", r2: "75 in", r3: "74.3 in (est)" },
                        { spec: "Height", r1: "66.9 in", r2: "66.9 in", r3: "59.5 in (est)" },
                        { spec: "Capacity", r1: "7", r2: "5", r3: "5 (est)" },
                        { spec: "wheelbase", r1: "3076 mm", r2: "2935 mm", r3: "2930 mm (est)" },
                        { spec: "range", r1: "410 mi", r2: "310 m1", r3: "300 mi (est)" }
                    ]
                });
            }
        };

    });