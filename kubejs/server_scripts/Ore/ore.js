ServerEvents.recipes(event => {
    // 远古残骸开采
    event.recipes.createoreexcavation.drilling("minecraft:ancient_debris", "{\"text\":\"远古残骸\"}", 10, 3000)
        .veinSize(3, 8.5)
        .biomeWhitelist("minecraft:is_nether")
        .id("createoreexcavation_kjs:ancient_debris")
        .drill("createoreexcavation:netherite_drill")
        .fluid("minecraft:lava 1000")
        .stress(1024)
})