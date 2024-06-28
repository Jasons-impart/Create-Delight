ServerEvents.recipes(e => {
    remove_recipes_id(e, [
        "createaddition:compacting/cake_base",
        "createaddition:smoking/cake_base_baked",
        "createaddition:compacting/seed_oil",
        "createaddition:mixing/bioethanol",
        "createaddition:crafting/capacitor_2",
        "createaddition:crafting/capacitor_1"
    ])
    remove_recipes_input(e, [
        "createaddition:cake_base_baked"
    ])
    e.recipes.minecraft.crafting_shaped("createaddition:capacitor", [
            " A ",
            " B ",
            " C "
        ], {
            A:'create:copper_sheet',
            B:'createaddition:zinc_sheet',
            C:'createaddition:copper_rod'
        }
    ).id("createaddition:crafting/capacitor")
})