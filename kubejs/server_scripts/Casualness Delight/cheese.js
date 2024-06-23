ServerEvents.recipes(e => {
    remove_recipes_id(e, [
        'casualness_delight:raw_cheese_wheel',
        "extradelight:cheese_block",
        "extradelight:cheese_block_to_item",
        "extradelight:cheese_vinegar",
        "create:mixing/cheese_vinegar_create"
    ])
    // 替换配方
    e.replaceInput(
        { mod: 'brewinandchewin'},
        'brewinandchewin:flaxen_cheese_wedge',
        '#forge:cheese'
    )
    // 幻翼泡芙
    e.custom({
        "type": "farmersdelight:cooking",
        "cookingtime": 200,
        "experience": 1.0,
        "ingredients": [
            {
                "item": "minecraft:phantom_membrane"
            },
            {
                "tag": 'forge:cheese'
            },
            {
                "tag": "forge:milk"
            }
        ],
        "recipe_book_tab": "misc",
        "result": {
            "count": 2,
            "item": "casualness_delight:phantom_puff"
        }
    })
    .id("casualness_delight:cooking/phantom_puff")
    // 奶酪相关
    e.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
            {
                "item": "brewinandchewin:flaxen_cheese_wheel"
            }
        ],
        "result": [
            {
                "count": 4,
                "item": 'ad_astra:cheese'
            }
        ],
        "tool": {
            "tag": "forge:tools/knives"
        }
    })
    .id("brewinandchewin:cutting/flaxen_cheese_wheel")
})