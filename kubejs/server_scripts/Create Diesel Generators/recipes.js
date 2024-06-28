ServerEvents.tags("item", e => {
    e.add("forge:fermentable", [
        'createaddition:biomass'
    ])
})
ServerEvents.recipes(e => {
    remove_recipes_id(e, [
        "createdieselgenerators:crafting/engine_piston_from_rods"
    ])
    // 替换安山合金
    e.replaceInput({mod: "createdieselgenerators"}, 'create:andesite_alloy', 'alloyed:steel_ingot')
    e.replaceInput({mod: "createdieselgenerators"}, 'create:propeller', 'ad_astra:engine_fan')
    e.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "BBB",
          "PCP",
          "AIA"
        ],
        "key": {
          "A": {
            "item": 'alloyed:steel_ingot'
          },
          "B": {
            "tag": 'forge:plates/steel'
          },
          "I": {
            "tag": "forge:plates/iron"
          },
          "C": {
            "item": "minecraft:clock"
          },
          "P": {
            "item": "create:fluid_pipe"
          }
        },
        "result": {
          "item": "createdieselgenerators:distillation_controller",
          "count": 1
        }
      }).id('createdieselgenerators:crafting/distillation_controller')

})