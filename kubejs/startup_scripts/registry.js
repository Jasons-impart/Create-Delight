StartupEvents.registry('item', e => {
    // 粗钢锭
    e.create("createdelight:raw_steel_ingot")
        .maxStackSize(64)
        .translationKey("item.createdelight.raw_steel_ingot")
        .tag("forge:ingots/raw_steel")
        .rarity("common")
    // 锤炼中的粗钢锭
    e.create("createdelight:hammering_raw_steel_ingot")
        .maxStackSize(64)
        .translationKey("item.createdelight.hammering_raw_steel_ingot")
        .tag("forge:ingots/hammering_raw_steel")
        .rarity("common")
    // 土豆加牛肉
    e.create("createdelight:potato_stew_beef")
        .food(food => {
            food.hunger(7)
                .saturation(0.6)
                .meat()
                .eaten(ctx => {
                    if (!ctx.level.isClientSide())
                        ctx.player.tell(Text.translatable("text.createdelight.eat_potato_stew_beef").red())
                })
        })
        .translationKey("item.createdelight.potato_stew_beef")
    // 未激活的凋零之眼
    e.create("createdelight:unactivated_wither_eye")
        .maxStackSize(16)
        .translationKey("item.createdelight.unactivated_wither_eye")
        .rarity("epic")
    e.create("createdelight:dusty_magical_eye")
        .maxDamage(16)
        .translationKey("item.createdelight.dusty_magical_eye")
        .rarity("rare")
    // **rs中间产物
    e.create("createdelight:incompleted_1k_storage_part")
        .maxStackSize(64)
        .translationKey("item.createdelight.incompleted_1k_storage_part")
        .rarity("common")
    e.create("createdelight:incompleted_4k_storage_part")
        .maxStackSize(64)
        .translationKey("item.createdelight.incompleted_4k_storage_part")
        .rarity("common")
    e.create("createdelight:incompleted_16k_storage_part")
        .maxStackSize(64)
        .translationKey("item.createdelight.incompleted_16k_storage_part")
        .rarity("common")
    e.create("createdelight:incompleted_64k_storage_part")
        .maxStackSize(64)
        .translationKey("item.createdelight.incompleted_64k_storage_part")
        .rarity("common")
    e.create("createdelight:incompleted_64k_fluid_storage_part")
        .maxStackSize(64)
        .translationKey("item.createdelight.incompleted_64k_fluid_storage_part")
        .rarity("common")
    e.create("createdelight:incompleted_256k_fluid_storage_part")
        .maxStackSize(64)
        .translationKey("item.createdelight.incompleted_256k_fluid_storage_part")
        .rarity("common")
    e.create("createdelight:incompleted_1024k_fluid_storage_part")
        .maxStackSize(64)
        .translationKey("item.createdelight.incompleted_1024k_fluid_storage_part")
        .rarity("common")
    e.create("createdelight:incompleted_4096k_fluid_storage_part")
        .maxStackSize(64)
        .translationKey("item.createdelight.incompleted_4096k_fluid_storage_part")
        .rarity("common")
    e.create("createdelight:raw_silicon")
        .maxStackSize(64)
        .translationKey("item.createdelight.raw_silicon")
        .rarity("common")
    // 巧克力相关
    e.create("createdelight:black_chocolate_mold_filled")
        .maxStackSize(64)
        .translationKey("item.createdelight.black_chocolate_mold_filled")
    e.create("createdelight:white_chocolate_mold_filled")
        .maxStackSize(64)
        .translationKey("item.createdelight.white_chocolate_mold_filled")
    e.create("createdelight:ruby_chocolate_mold_filled")
        .maxStackSize(64)
        .translationKey("item.createdelight.ruby_chocolate_mold_filled")
    e.create("createdelight:black_chocolate_mold_solid")
        .maxStackSize(64)
        .translationKey("item.createdelight.black_chocolate_mold_solid")
    e.create("createdelight:white_chocolate_mold_solid")
        .maxStackSize(64)
        .translationKey("item.createdelight.white_chocolate_mold_solid")
    e.create("createdelight:ruby_chocolate_mold_solid")
        .maxStackSize(64)
        .translationKey("item.createdelight.ruby_chocolate_mold_solid")
})