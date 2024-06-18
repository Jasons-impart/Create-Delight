ServerEvents.recipes(event => {
    //新增配方：银河系漫游指南
    event.shapeless('ad_astra:astrodux', [
        'alloyed:steel_ingot',
        'minecraft:book'
    ])
    //新增配方：玫瑰石英
    event.shapeless('create:rose_quartz', [
        '4x redstone',
        'quartz'
    ])
    //新增配方：霜原木
    event.shapeless('ad_astra:glacian_log', [
        '#minecraft:logs',
        'ad_astra:ice_shard'
    ])
    //新增配方：霜原树叶
    event.shapeless('ad_astra:glacian_leaves', [
        '#minecraft:leaves',
        'ad_astra:ice_shard'
    ])
    //修改配方：女巫之眼
    event.shapeless('endrem:witch_eye', [
        'ender_eye',
        'endrem:witch_pupil',
        'ulterlands:etherite'
    ]).id('endrem:witch_eye')
})
