ServerEvents.recipes(e => {
    remove_recipes_id(e, [
        "farmersdelight:integration/create/filling/chocolate_pie",
        "create_confectionery:crushed_cocoa_recipe",
        "create_confectionery:cocoa_powder_and_butter_recipe"
    ])
    // 巧克力派
    e.custom({
        "type": "extradelight:oven",
        "container": {
          "item": "extradelight:pie_dish"
        },
        "cookingtime": 800,
        "experience": 1.0,
        "ingredients": [
            {
                "item": 'ratatouille:cocoa_solids'
            },
            {
                "tag": "forge:whipped_cream"
            },
            {
                "item": 'ratatouille:cocoa_butter'
            },
            {
                "item": "extradelight:egg_mix"
            },
            {
                "item": 'minecraft:sugar'
            },
            {
                "tag": "forge:flour"
            },
            {
                "tag": "extradelight:sweetener"
            },
            {
                "item": "farmersdelight:pie_crust"
            },
            {
                "tag": "extradelight:sweetener"
            }
        ],
        "recipe_book_tab": "meals",
        "result": {
            "item": "farmersdelight:chocolate_pie"
        }
    })
        .id("extradelight:oven/chocolate_pie")
    e.custom({
        "type": "extradelight:oven",
        "container": {
          "item": "extradelight:pie_dish"
        },
        "cookingtime": 800,
        "experience": 1.0,
        "ingredients": [
            {
                "tag": "forge:bars/chocolate"
            },
            {
                "item": "extradelight:egg_mix"
            },
            {
                "tag": "forge:flour"
            },
            {
                "tag": "extradelight:sweetener"
            },
            {
                "item": "farmersdelight:pie_crust"
            },
            {
                "tag": "extradelight:sweetener"
            }
        ],
        "recipe_book_tab": "meals",
        "result": {
            "item": "farmersdelight:chocolate_pie"
        }
    })
        .id("extradelight:oven/chocolate_pie2")
    // 巧克力蛋奶沙司
    e.custom({
        "type": "create:mixing",
        "heatRequirement": "heated",
        "ingredients": [
            {
                "tag": "forge:bars/chocolate"
            },
            {
                "tag": "forge:milk"
            },
            {
                "tag": "forge:eggs"
            },
            {
                "tag": "extradelight:sweetener"
            },
            {
                "item": "minecraft:glass_bottle"
            }
        ],
        "results": [
            {
                "item": "extradelight:chocolate_custard"
            }
        ]
    })
    .id("create:mixing/chocolate_custard_create")
    e.custom({
        "type": "farmersdelight:cooking",
        "cookingtime": 200,
        "experience": 1.0,
        "ingredients": [
          {
            "tag": "forge:eggs"
          },
          {
            "tag": "forge:milk"
          },
          {
            "tag": "forge:bars/chocolate"
          },
          {
            "tag": "extradelight:sweetener"
          }
        ],
        "recipe_book_tab": "meals",
        "result": {
          "item": "extradelight:chocolate_custard"
        }
      })
      .id("extradelight:chocolate_custard")
    // 巧克力奶酪蛋糕
    e.custom({
        "type": "extradelight:oven",
        "container": {
          "item": "extradelight:pie_dish"
        },
        "cookingtime": 800,
        "experience": 1.0,
        "ingredients": [
          {
            "tag": "forge:bars/chocolate"
          },
          {
            "item": "farmersdelight:pie_crust"
          },
          {
            "tag": "forge:cheese"
          }
        ],
        "recipe_book_tab": "meals",
        "result": {
          "item": "extradelight:chocolate_cheesecake"
        }
      })
      .id("extradelight:oven/chocolate_cheesecake")
})