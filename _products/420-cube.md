---
title: 4–20 mA current-loop acquisition
card-order: 2
description: Wireless, two-channel, current-loop acquisition for connecting industrial 4–20 mA sensors.
#repository: https://github.com/bl-instr/420-cube
product-code: 420-cube
specifications_in_content: true
specifications:
  - name: Primary function
    value: 4–20 mA current-loop acquisition and scaling
  - name: Sensor / interface
    value: Industrial 4–20 mA current-loop transmitters, including flow and pressure sensors
  - name: Channels
    value: Two independent current-loop channels
  - name: Measurement / operating range
    value: 4–20 mA per channel
  - name: Readout resolution
    value: 0.04%
  - name: Input impedance
    value: 120 Ω per channel
  - name: Analog bandwidth
    value: 1 kHz per channel
  - name: Digital filtering
    value: Remotely controllable digital filter for lower effective bandwidth and improved noise performance
  - name: Inputs / outputs
    value: Per channel - one 24 V field-device supply pin and two current-sensor input pins; 5 mm screw terminals for field wiring
  - name: Power input
    value: 24 V DC via 2.1 mm barrel connector
  - name: Wireless
    value: 2.4 GHz Wi-Fi
  - name: Communication
    value: MQTT publish/subscribe protocol
  - name: Controller
    value: Raspberry Pi Pico W / RP2040
  - name: PCB dimensions
    value: 50 mm × 87 mm
  - name: Enclosure and mounting
    value: 55 mm × 93 mm × 26 mm; DIN Mod3-compatible enclosure with removable DIN-rail mount
  - name: Platform
    value: Blinky-Lite Instrumentation Platform

---

## Overview

The 4–20 mA Cube is a compact, wireless instrumentation module in the Blinky-Lite Instrumentation Platform. It is designed to read two 4–20 mA current-loop signals near the equipment or sensors being monitored, then communicate scaled measurements and alarms to a central Blinky-Lite control system.

Current-loop sensors are widely used in industrial environments for measurements such as flow, pressure, level, and process temperature. Each channel includes a 24 V field-device supply connection and a dedicated current-sensor input, making it straightforward to connect compatible two-wire transmitters.

Built around the Raspberry Pi Pico W / RP2040, the module uses 2.4 GHz Wi-Fi and MQTT publish/subscribe communication. This event-driven approach supports distributed deployments without wired data connections and enables Blinky-Lite to use device information for recording, notifications, visualisation, and machine-protection workflows.

| Enclosure | PCB |
|-----------|-----|
|<img src="/assets/images/products/420-cube/420-cube.png" alt="420-cube" width="400"/>|<img src="/assets/images/products/420-cube/420PCB.png" alt="420PCB" width="400"/>

### Key features

- Two-channel current-loop acquisition: Read two independent 4–20 mA industrial sensor signals.
- Integrated field-device power: Each channel provides a 24 V pin for powering a connected external device.
- 1 kHz analog bandwidth: Capture changing process signals with a 1 kHz analog bandwidth per channel.
- Remotely configurable digital filtering: Reduce the effective bandwidth for improved noise performance when a slower measurement response is appropriate.
- High-resolution readout: 0.04% readout resolution.
- Engineering-unit scaling: Configure output scaling in Blinky-Lite so current-loop sensors can be viewed and used in their natural units.
- PLC-style field wiring: 5 mm screw terminals simplify connection of sensors and field wiring in PLC-like installations.
- Event-driven integration: MQTT publish/subscribe communication with Blinky-Lite.
- Open-source firmware: Microcontroller code can be adapted for site-specific instrumentation and integration requirements.

### Typical applications

- Flow-meter monitoring
- Pressure-sensor monitoring
- Industrial process instrumentation
- Distributed sensor installations requiring central visibility and configurable filtering
- Alarm and machine-protection workflows based on process values

{% include product-specifications.html %}

## Getting started

### Hardware

1. Install the 4–20 mA Cube close to the current-loop sensors or process signals to be monitored.
2. Connect each transmitter to its assigned 5 mm screw terminals, including the channel’s 24 V field-device supply pin where required.
3. Connect the current-loop signal to the two input terminals for its channel according to the product wiring documentation.
4. Power the cube from a regulated 24 V DC supply through the 2.1 mm barrel connector.
5. Verify that each connected sensor and its wiring are compatible with the channel’s 4–20 mA input and 24 V supply arrangement.
6. Mount the enclosure on a DIN rail when required, or remove the DIN-rail mount for an alternative installation.

### Firmware build target

The firmware targets the Raspberry Pi Pico W / RP2040 using the Arduino-Pico board support.
- Board: Pico W / RP2040-compatible target
- Flash layout: Sketch 1920 KB, filesystem 128 KB
- FQBN flash option: flash=2097152_131072

### Open-source software and licensing

The firmware is released under the MIT License, giving users broad permission to study, modify, and adapt the code for their own applications. The open hardware design can likewise be customised to suit site-specific requirements. The firmware uses the open-source Arduino-BlinkyPicoW library, which is also available under the MIT License.

### Configuration

1. Build and upload the firmware using the project’s source and configuration files.
2. Use the onboard web interface to set or update Wi-Fi credentials.
3. Configure the MQTT connection and create the corresponding device integration in Blinky-Lite.
4. Set channel scaling so each 4–20 mA input is reported in the sensor’s required engineering units.
5. Set the digital filter bandwidth, alarm thresholds, and any required operating limits for each channel.
6. Verify that normal measurements and alarm events appear as expected in Blinky-Lite.

### Integration model

The 4–20 mA Cube uses MQTT to publish scaled measurements and alarm events. This event-driven model avoids conventional polling and enables prompt control-system responses to changing process conditions.

In a typical deployment, the device connects by Wi-Fi to the network and communicates through an MQTT broker. Blinky-Lite represents it as an integrated instrumentation node and can use its information for recording, display, notification, alarms, and machine-protection logic.

### Measurement, safety, and installation considerations

- Confirm that connected transmitters, current loops, wiring, and environmental conditions are within the product’s specified limits.
- Verify correct polarity and wiring before energising the 24 V field-device supply.
- Apply channel scaling and digital filter settings appropriate to the sensor and required measurement response.
- Validate normal operation and alarm behaviour against a known reference source before relying on the device for operational or protection decisions.
- Review connector, cable, grounding, shielding, enclosure, and environmental requirements before installation.