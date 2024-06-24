ServerEvents.recipes(e => {
    e.recipes.create.mixing(
        '3x createdelight:oil_dough',
        [
            'extradelight:butter',
            'extradelight:yeast',
            '#extradelight:sweetener',
            '3x create:wheat_flour'
        ]
    )
    e.recipes.create.mixing(
        '3x createdelight:oil_dough',
        [
            'extradelight:butter',
            'extradelight:yeast',
            Fluid.of("create:honey", 250),
            '3x create:wheat_flour'
        ]
    )
    e.recipes.minecraft.crafting_shapeless(
        '3x createdelight:oil_dough',
        [
            'extradelight:butter',
            'extradelight:yeast',
            '#extradelight:sweetener',
            '3x create:wheat_flour'
        ]
    )
})