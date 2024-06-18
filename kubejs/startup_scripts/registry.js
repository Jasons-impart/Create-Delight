StartupEvents.registry('item', event => {
    //注册粗钢锭
    event.create('raw_steel').maxStackSize(64).displayName('粗钢锭').tag('forge:ingots').rarity('common')
    //注册锤炼中的粗钢锭
    event.create('incompleted_raw_steel').maxStackSize(64).displayName('锤炼中的粗钢锭').tag('forge:ingots').rarity('common')
    //注册土豆加牛肉
    event.create('potato_stew_beef').food(food => {
        food.hunger(7)
            .saturation(0.6)
            .meat()
            .eaten(ctx => {
                ctx.player.tell(Text.red('厨子不偷，五谷不收？!'))
            })
    }).displayName('土豆夹牛肉')
    //注册未激活的凋零之眼
    event.create('unactivated_wither_eye').maxStackSize(16).displayName('未激活的凋零之眼').rarity('epic')
    event.create('dusty_magical_eye').maxDamage(16).displayName('蒙尘的魔力之眼').rarity('rare')
})