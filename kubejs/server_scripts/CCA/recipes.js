ServerEvents.recipes(e => {
    remove_recipes_id(e, [
        "createaddition:compacting/cake_base",
        "createaddition:smoking/cake_base_baked"
    ])
    remove_recipes_input(e, [
        "createaddition:cake_base_baked"
    ])
})