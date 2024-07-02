ServerEvents.recipes(e => {
    // 远古残骸开采
    e.custom({
        "type": "createoreexcavation:drilling",
        "amountMax": 8.5,
        "amountMin": 3,
        "biomeWhitelist": "minecraft:is_nether",
        "drill": {
            "item": "createoreexcavation:netherite_drill"
        },
        "fluid": {
            "amount": 1000,
            "fluid": "minecraft:lava",
            "nbt": {}
        },
        "name": "{\"translate\":\"item.createdelight.ancient_debris\"}",
        "output": [
            {
                "item": "minecraft:ancient_debris"
            },
            {
                "chance": 0.1,
                "item": "minecraft:ancient_debris"
            }
        ],
        "stress": 1024,
        "ticks": 3000,
        "weight": 2
    })
    .id("createoreexcavation:drilling/ancient_debris")
    // 青金石开掘
    e.custom({
        "type": "createoreexcavation:drilling",
        "amountMax": 30.0,
        "amountMin": 10.0,
        "biomeWhitelist": "minecraft:is_overworld",
        "drill": {
            "tag": "createoreexcavation:drills"
        },
        "name": "{\"translate\":\"item.createdelight.lapis_lazuli\"}",
        "output": [
            {
                "item": "minecraft:lapis_lazuli"
            }
        ],
        "stress": 256,
        "ticks": 600,
        "weight": 10
    })
    .id("createoreexcavation:drilling/lapis_lazuli")
})