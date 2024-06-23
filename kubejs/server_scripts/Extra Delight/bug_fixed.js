    // extradelight的bug修复
ServerEvents.tags("item", e => {
    // 香肠相关
    e.add("forge:sausage", [
        'ratatouille:raw_sausage'
    ])
    e.add("forge:sausage/cooked", [
        'ratatouille:sausage'
    ])
    // 玉米面包增加extradeligt兼容
    e.add("forge:bread/sliced", [
        "extradelight:cornbread"
    ])
})
ServerEvents.recipes(e => {
    e.replaceInput(
        { mod: 'extradelight'},
        "minecraft:heavy_weighted_pressure_plate",
        "create:iron_sheet"
    )
    e.shapeless(
        'extradelight:baking_stone',
        'minecraft:smooth_stone_slab'
    )
    .id("extradelight:baking_stone")
})
