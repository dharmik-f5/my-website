import "@hotwired/turbo"
import { Application } from "@hotwired/stimulus"
import "@hotwired/hotwire-native-bridge"
import { Turbo } from "@hotwired/turbo"
import { TurboNativeBridge } from "@hotwired/hotwire-native-bridge"

// Controllers
import MenuController from "menu_controller_2.js"

// Bridge Components
import BridgeFormController from "form_controller.js"
import BridgeMenuController from "menu_controller.js"
import BridgeOverflowMenuController from "overflow_menu_controller.js"


Turbo.setAdapter(new TurboNativeBridge())

// Start Stimulus
window.Stimulus = Application.start()

// Register Controllers
Stimulus.register("menu", MenuController)

// Register Bridge Components
Stimulus.register("bridge--form", BridgeFormController)
Stimulus.register("bridge--menu", BridgeMenuController)
Stimulus.register("bridge--overflow-menu", BridgeOverflowMenuController)
