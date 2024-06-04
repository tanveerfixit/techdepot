document.addEventListener("DOMContentLoaded", function() {
    const deviceButtons = document.querySelectorAll(".device-button");
    const subDeviceContainer = document.getElementById("subDeviceContainer");
    const subDeviceCheckboxes = document.getElementById("subDeviceCheckboxes");
    const deviceInput = document.getElementById("device");
    const faultButtons = document.querySelectorAll(".fault-button");
    const faultInput = document.getElementById("fault");

    const subDeviceOptions = {
        computer: ["Laptop", "Desktop PC", "All-in-One", "Other"],
        mobile: ["Android Mobile", "Apple", "Other"],
        printer: [],
        other: []
    };

    deviceButtons.forEach(button => {
        button.addEventListener("click", function() {
            const selectedDevice = button.getAttribute("data-device");
            deviceInput.value = selectedDevice;

            deviceButtons.forEach(btn => btn.classList.remove("selected"));
            button.classList.add("selected");

            subDeviceCheckboxes.innerHTML = '';

            if (selectedDevice && subDeviceOptions[selectedDevice].length > 0) {
                subDeviceContainer.style.display = "block";

                subDeviceOptions[selectedDevice].forEach(function(subDevice) {
                    const checkbox = document.createElement("input");
                    checkbox.type = "checkbox";
                    checkbox.name = "subDevice";
                    checkbox.value = subDevice.toLowerCase().replace(/ /g, "_");
                    checkbox.id = subDevice.toLowerCase().replace(/ /g, "_");

                    const label = document.createElement("label");
                    label.htmlFor = checkbox.id;
                    label.textContent = subDevice;
                    label.className = "sub-device-checkbox";

                    subDeviceCheckboxes.appendChild(checkbox);
                    subDeviceCheckboxes.appendChild(label);
                });
            } else {
                subDeviceContainer.style.display = "none";
            }
        });
    });

    faultButtons.forEach(button => {
        button.addEventListener("click", function() {
            faultInput.value = button.getAttribute("data-fault");
        });
    });
});
