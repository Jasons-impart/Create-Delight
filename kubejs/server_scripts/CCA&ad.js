ServerEvents.recipes(event => {
    //添加燃油和凌冰燃油成为CCA的燃料
    event.custom({
        "type": "createaddition:liquid_burning",
        "input": {
            "fluid": "ad_astra:fuel",
            "amount": 1000
        },
        "burnTime": 20000,
    })
    event.custom({
        "type": "createaddition:liquid_burning",
        "input": {
            "fluid": "ad_astra:cryo_fuel",
            "amount": 1000
        },
        "burnTime": 36000,
        "superheated": true
    })
})
