sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        // onInit() {
        //     const model = this.getView().getModel("car");
        //     if (model) {
        //         const selected = model.getProperty("/selectedModel") || "R2";
        //         this.byId("carImage").setSrc("img/" + selected.toLowerCase() + ".jpg");
        //     } else {
        //         console.error("Car model not loaded yet.");
        //     }
        // },
        onInit() {
            const model = this.getView().getModel("car");

            if (model) {
                const selected = model.getProperty("/selectedModel") || "R2";
                const imgPath = "img/" + selected.toLowerCase() + ".jpg";
                this.byId("carImage").setSrc(imgPath);

                // jQuery enhancement: wait for control to render

                this.byId("carImage").addEventDelegate({
                    onAfterRendering: () => {
                        const $img = this.byId("carImage").$(); // jQuery reference
                        const currentModel = model.getProperty("/selectedModel");
                        // Add tooltip dynamically
                        $img.attr("title", `Currently showing: ${currentModel} Model`);

                        // Animate border to highlight image
                        $img.css({
                            border: "3px dashed #3f51b5",
                            transition: "border 0.5s ease-in-out"
                        });

                        // Optional reset after a few seconds
                        setTimeout(() => {
                            $img.css("border", "none");
                        }, 3000);
                    }
                });

            } else {
                console.error("Car model not loaded yet.");
            }
        },

        // onModelSelect(oEvent) {
        //     const selectedKey = oEvent.getParameter("item").getKey();
        //     const model = this.getView().getModel("car");

        //     model.setProperty("/selectedModel", selectedKey);

        //     const image = this.byId("carImage");
        //     image.setSrc("img/" + selectedKey.toLowerCase() + ".jpg");
        // },
        onModelSelect(oEvent) {
            const selectedKey = oEvent.getParameter("item").getKey(); // evwnts : R2 or R3
            const model = this.getView().getModel("car");
            model.setProperty("/selectedModel", selectedKey);

            const $image = this.byId("carImage").$();
            const newSrc = "img/" + selectedKey.toLowerCase() + ".jpg";

            // Fade out, then update src, then fade in with slide
            $image.fadeOut(200, () => {
                $image.attr("src", newSrc);

                // Reset styles before animating
                $image.css({ display: "block", marginLeft: "-30px", opacity: 0 });

                // animate
                $image.animate(
                    { marginLeft: "0px", opacity: 1 },
                    {
                        duration: 400,
                        easing: "swing",
                        complete: () => {
                            $image.css("marginLeft", ""); // clean up
                            $image.attr("title", `Currently showing: ${selectedKey} Model`);
                        }
                    }
                );
            });
        },

        // 
        // onSubmitGuess() {
        //     const model = this.getView().getModel("car");
        //     const selectedModel = model.getProperty("/selectedModel");
        //     const expectedYear = model.getProperty(`/launchYears/${selectedModel}`);
        //     const inputYear = this.byId("yearInput").getValue();

        //     if (inputYear === expectedYear) {
        //         MessageToast.show("Correct! You're awesome 🚗");
        //     } else {
        //         MessageToast.show("Oops! Try again.");
        //     }
        // }
        onSubmitGuess() {
            const model = this.getView().getModel("car");
            const selectedModel = model.getProperty("/selectedModel");
            const expectedYear = model.getProperty(`/launchYears/${selectedModel}`);
            const inputYear = this.byId("yearInput").getValue();
            const $input = this.byId("yearInput").$(); // jQuery DOM

            if (inputYear === expectedYear) {
                sap.m.MessageToast.show("Correct! You're awesome 🚗", {
                    at: "top center", // 🔹 position
                    offset: "0 80",   // 🔹 push it slightly down from top (optional)
                    my: "top center",
                    of: window,
                    duration: 2000
                });
                $input.css("border", "2px solid green");
                setTimeout(() => $input.css("border", ""), 1000);
            } else {
                sap.m.MessageToast.show("Oops! Try again.", {
                    at: "top center", // 🔹 position
                    offset: "0 50",   // 🔹 push it slightly down from top (optional)
                    my: "top center",
                    of: window,
                    duration: 2000
                });
                $input.css("border", "2px solid red");
                setTimeout(() => $input.css("border", ""), 1000);

                // 🔹 jQuery Shake Animation
                $input.css("position", "relative"); // ensure relative position
                for (let i = 0; i < 3; i++) {
                    $input.animate({ left: "-10px" }, 50)
                        .animate({ left: "10px" }, 50);
                }
                $input.animate({ left: "0px" }, 50); // reset

            }
        },
        onPageSelect(oEvent) {
            const selectedKey = oEvent.getParameter("selectedItem").getKey();
            if (selectedKey === "specs") {
                this.getOwnerComponent().getRouter().navTo("Specs");
            }
        },
        onModelDisplay: function () {
            this.byId("vboxMain").setVisible(true);
            this.byId("specsVBox").setVisible(false);
        },

        onSpecsDisplay: function () {
            this.byId("vboxMain").setVisible(false);
            this.byId("specsVBox").setVisible(true);
        },

        // onToggleSidebar: function () {
        //     const $sidebar = this.byId("sidebar").$();

        //     if ($sidebar.hasClass("sidebarHidden")) {
        //         $sidebar.removeClass("sidebarHidden").slideDown(200);
        //     } else {
        //         $sidebar.addClass("sidebarHidden").slideUp(200);
        //     }
        // }
        onToggleSidebar: function () {
            const sidebar = this.byId("sidebar");
            if (sidebar.getVisible()) {
                sidebar.setVisible(false);
            } else {
                sidebar.setVisible(true);
            }
        },
        onToggleNav: function () {
            const navBar = this.byId("navBar");
            const isVisible = navBar.getVisible();
            navBar.setVisible(!isVisible);
        }


    });
});
