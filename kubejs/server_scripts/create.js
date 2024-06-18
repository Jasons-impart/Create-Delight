ServerEvents.recipes(event => {
    //动力合成器添加：四轴飞行器
    event.recipes.create.mechanical_crafting('immersive_aircraft:quadrocopter', [
        'ABA',
        'BCB',
        'ADA'
    ], {
        A: 'immersive_aircraft:propeller',
        B: 'quark:bamboo_planks',
        C: 'minecraft:scaffolding',
        D: 'immersive_aircraft:engine'
    })
    //动力合成器添加：固定旋翼机
    event.recipes.create.mechanical_crafting('immersive_aircraft:gyrodyne', [
        ' A ',
        'BCB',
        ' D '
    ], {
        A: 'immersive_aircraft:propeller',
        B: 'immersive_aircraft:sail',
        C: 'immersive_aircraft:hull',
        D: 'minecraft:grindstone'
    })
    //动力合成器添加：双翼机
    event.recipes.create.mechanical_crafting('immersive_aircraft:biplane', [
        '  A  ',
        '  B  ',
        'CCDCC',
        '  E  ',
        ' CEC '
    ], {
        A: 'immersive_aircraft:propeller',
        B: 'immersive_aircraft:engine',
        C: 'immersive_aircraft:hull',
        D: '#minecraft:wooden_trapdoors',
        E: '#minecraft:logs'
    })
    //动力合成器添加：锅炉
    event.recipes.create.mechanical_crafting('immersive_aircraft:boiler', [
        'AAA',
        'ABA',
        'ACA',
        'ADA',
        'AAA'
    ], {
        A: 'minecraft:copper_ingot',
        B: 'create_sa:large_filling_tank',
        C: 'create_sa:heat_engine',
        D: 'create_sa:large_fueling_tank'
    })
    //动力合成器添加：一级火箭
    event.recipes.create.mechanical_crafting('ad_astra:tier_1_rocket', [
        '  A  ',
        ' BBB ',
        ' B B ',
        ' B B ',
        ' BBB ',
        'CDDDC',
        'CEEEC'
    ], {
        A: 'ad_astra:rocket_nose_cone',
        B: '#forge:storage_blocks/steel',
        C: 'ad_astra:rocket_fin',
        D: 'ad_astra:steel_tank',
        E: 'ad_astra:steel_engine'
    })
    //动力合成器添加：二级火箭
    event.recipes.create.mechanical_crafting('ad_astra:tier_2_rocket', [
        '  A  ',
        ' BBB ',
        ' B B ',
        ' B B ',
        ' BBB ',
        'CDDDC',
        'CEEEC'
    ], {
        A: 'ad_astra:rocket_nose_cone',
        B: 'ad_astra:desh_block',
        C: 'ad_astra:rocket_fin',
        D: 'ad_astra:desh_tank',
        E: 'ad_astra:desh_engine'
    })
    //动力合成器添加：三级火箭
    event.recipes.create.mechanical_crafting('ad_astra:tier_3_rocket', [
        '  A  ',
        ' BBB ',
        ' B B ',
        ' B B ',
        ' BBB ',
        'CDDDC',
        'CEEEC'
    ], {
        A: 'ad_astra:rocket_nose_cone',
        B: 'ad_astra:ostrum_block',
        C: 'ad_astra:rocket_fin',
        D: 'ad_astra:ostrum_tank',
        E: 'ad_astra:ostrum_engine'
    })
    //动力合成器添加：四级火箭
    event.recipes.create.mechanical_crafting('ad_astra:tier_4_rocket', [
        '  A  ',
        ' BBB ',
        ' B B ',
        ' B B ',
        ' BBB ',
        'CDDDC',
        'CEEEC'
    ], {
        A: 'ad_astra:rocket_nose_cone',
        B: 'ad_astra:calorite_block',
        C: 'ad_astra:rocket_fin',
        D: 'ad_astra:calorite_tank',
        E: 'ad_astra:calorite_engine'
    })
    //搅拌合成：粗钢锭
    event.recipes.create.mixing(
        ['2x kubejs:raw_steel'],
        ['2x minecraft:iron_ingot', '#minecraft:coals', Fluid.lava(100)]
    ).id('create.kjs:raw_steel')
    event.recipes.create.mixing(
        ['2x kubejs:raw_steel'],
        ['2x minecraft:iron_ingot', '#minecraft:coals']
    ).id('create.kjs:raw_steel/2').heated()
    //搅拌合成：枯木
    event.recipes.create.mixing(
        [Fluid.water(100), 'dead_bush'],
        ['#minecraft:saplings', '#minecraft:saplings']
    ).id('create.kjs:dead_bush')
    //搅拌合成：玫瑰石英
    event.recipes.create.mixing(
        ['create:rose_quartz'],
        ['2x minecraft:redstone', 'minecraft:quartz']
    ).id('create.kjs:rose_quartz').heated()
    //搅拌合成：椰子奶茶
    event.recipes.create.mixing(
        [Fluid.of('createcafe:coconut_tea', 500)],
        ['beachparty:coconut_open', Fluid.of("minecraft:milk", 250), Fluid.of('createcafe:melted_sugar', 250)]
    ).id('createcafe.kjs:coconut_tea').heated()
    //搅拌合成：椰子糖浆
    event.recipes.create.mixing(
        [Fluid.of('createcafe:coconut_syrup', 1000)],
        ['beachparty:coconut_open', Fluid.water(250), Fluid.of('createcafe:melted_sugar', 750)]
    ).id('createcafe.kjs:coconut_syrup').heated()
    //搅拌合成：葡萄奶茶
    event.recipes.create.mixing(
        [Fluid.of('createcafe:grape_tea', 1000)],
        ['#vinery:red_grape', '#vinery:white_grape', Fluid.of("minecraft:milk", 500), Fluid.of('createcafe:melted_sugar', 500)]
    ).id('createcafe.kjs:grape_tea').heated()
    //搅拌合成：烧烤汁
    event.recipes.create.mixing(
        ['extradelight:bbq_jar_item'],
        ['#forge:crops/tomato', '#forge:crops/onion', 'extradelight:vinegar', 'minecraft:glass_bottle', Fluid.of('create:honey', 250)]
    ).id('sliceanddice_kjs:cooking/extradelight/bbq_sugar').heated()
    //搅拌合成：大骨汤
    event.recipes.create.mixing(
        ['farmersdelight:bone_broth'],
        ['minecraft:bone', 'minecraft:glass_bottle', '#forge:crops/tomato']
    ).id('sliceanddice_kjs:cooking/extradelight/stock_bottle').heated()
    event.recipes.create.mixing(
        ['farmersdelight:bone_broth'],
        ['minecraft:bone', 'minecraft:bowl', '#forge:crops/tomato']
    ).id('sliceanddice_kjs:cooking/extradelight/stock_bowl').heated()
    //搅拌合成：番茄酱
    event.recipes.create.mixing(
        ['extradelight:ketchup_jar_item'],
        [Fluid.of('create:honey', 250), '2x #forge:crops/tomato', 'extradelight:vinegar', 'minecraft:glass_bottle']
    ).id('sliceanddice_kjs:cooking/extradelight/ketchup_jar').heated()
    //搅拌合成：番茄酱（液体）
    event.recipes.create.mixing(
        [Fluid.of('create_central_kitchen:tomato_sauce', 250)],
        ['2x #forge:crops/tomato']
    ).id('create_central_kitchen:mixing/tomato_sauce')
    //动力锯切割：平滑玫瑰石英
    event.recipes.create.cutting(
        ['create:polished_rose_quartz', Item.of('create:polished_rose_quartz').withChance(0.1)],
        'create:rose_quartz'
    ).id('create.kjs:polished_rose_quartz')
    //机械手合成：凋零之眼
    event.recipes.create.deploying(
        'endrem:wither_eye', ['kubejs:unactivated_wither_eye', 'ulterlands:pentagram']
    )
    //机械手合成：魔力之眼
    event.recipes.create.deploying(
        'endrem:magical_eye', ['kubejs:dusty_magical_eye', 'ulterlands:etherite']
    )
    //序列合成：钢锭
    let inter = 'kubejs:incompleted_raw_steel'
    event.recipes.create.sequenced_assembly('alloyed:steel_ingot', 'kubejs:raw_steel', [
        event.recipes.createFilling(inter, [inter, Fluid.lava(20)]),
        event.recipes.createPressing(inter, inter),
        event.recipes.createPressing(inter, inter)
    ]).transitionalItem(inter).loops(5)
    //序列合成：填馅土豆
    event.recipes.create.sequenced_assembly('farmersdelight:stuffed_potato', 'minecraft:potato', [
        event.recipes.createDeploying('kubejs:potato_stew_beef', ['minecraft:potato', '#forge:cooked_beef']),
        event.recipes.createFilling('farmersdelight:stuffed_potato', ['kubejs:potato_stew_beef', Fluid.of('minecraft:milk', 50)]),
    ]).transitionalItem('kubejs:potato_stew_beef').loops(1)
})
