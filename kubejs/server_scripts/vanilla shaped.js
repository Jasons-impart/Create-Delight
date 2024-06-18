ServerEvents.recipes(event => {
    //添加配方：飞艇
    event.shaped('immersive_aircraft:airship', [
        'AAA',
        'BBA',
        'BCD'
    ], {
        A: 'immersive_aircraft:sail',
        B: 'immersive_aircraft:hull',
        C: 'immersive_aircraft:engine',
        D: 'immersive_aircraft:propeller'
    })
    //增加配方：引擎
    event.shaped('immersive_aircraft:engine', [
        'AAA',
        'BCB',
        'ADA'
    ], {
        A: 'minecraft:iron_ingot',
        B: 'create:mechanical_piston',
        C: 'create_sa:steam_engine',
        D: 'immersive_aircraft:boiler'
    })
    //增加配方：螺旋桨
    event.shaped('immersive_aircraft:propeller', [
        'AA ',
        ' B ',
        ' AA'
    ], {
        A: 'minecraft:iron_ingot',
        B: 'create:andesite_alloy'
    })
    //增加配方：钢制锅炉
    event.shaped('immersive_aircraft:steel_boiler', [
        'AAA',
        'ABA',
        'ACA'
    ], {
        A: 'alloyed:steel_ingot',
        B: 'immersive_aircraft:boiler',
        C: 'create_sa:steam_engine'
    })
    //增加配方：工业齿轮
    event.shaped('immersive_aircraft:industrial_gears', [
        ' AA',
        'BCA',
        'BB '
    ], {
        A: 'create:large_cogwheel',
        B: 'create:cogwheel',
        C: '63x create:shaft'
    })
    //新增配方：改良起落架
    event.shaped('immersive_aircraft:improved_landing_gear', [
        ' AB',
        'CCA',
        'CC '
    ], {
        A: 'minecraft:iron_ingot',
        B: 'create:andesite_alloy',
        C: 'minecraft:dried_kelp'
    })
    //替换配方：裂隙图腾
    event.shaped(Item.of('ulterlands:ulterlands_dimension'), [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: 'minecraft:oxidized_copper',
        B: 'minecraft:amethyst_shard',
        C: 'minecraft:netherite_ingot'
    }).id('ulterlands:recipe_rift_totem')
    //替换配方：B12黑曜石
    event.shaped('ulterlands:obsidian_b_12', [
        'ABA',
        'CDC',
        'ACA'
    ], {
        A: '#minecraft:coals',
        B: 'aether:zanite_gemstone',
        C: 'alloyed:steel_ingot',
        D: 'minecraft:obsidian'
    }).id('ulterlands:recipe_ob_12')
    //替换配方：氧气罐
    event.shaped('ad_astra:oxygen_tank', [
        'ABA',
        'ACA',
        'AAA'
    ], {
        A: 'alloyed:steel_sheet',
        B: 'createaddition:iron_rod',
        C: 'create:fluid_tank'
    }).id('ad_astra:recipes/oxygen_tank')
    //替换配方：引擎框架
    event.shaped('ad_astra:engine_frame', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#forge:rods/iron',
        B: 'create:precision_mechanism'
    }).id('ad_astra:recipes/engine_frame')
    //替换配方：引擎风扇
    event.shaped('ad_astra:engine_fan', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'alloyed:steel_sheet',
        B: 'create:propeller'
    }).id('ad_astra:recipes/engine_fan')
    //替换配方：钢燃料储罐
    event.shaped('ad_astra:steel_tank', [
        'AA ',
        'ABC',
        'AA '
    ], {
        A: 'alloyed:steel_sheet',
        B: 'create:fluid_tank',
        C: '#forge:rods/iron'
    }).id('ad_astra:recipes/steel_tank')
    //替换配方：戴斯燃料储罐
    event.shaped('ad_astra:desh_tank', [
        'AA ',
        'ABC',
        'AA '
    ], {
        A: 'ad_astra:desh_plate',
        B: 'create:fluid_tank',
        C: '#forge:rods/iron'
    }).id('ad_astra:recipes/desh_tank')
    //替换配方：紫金燃料储罐
    event.shaped('ad_astra:ostrum_tank', [
        'AA ',
        'ABC',
        'AA '
    ], {
        A: 'ad_astra:ostrum_plate',
        B: 'create:fluid_tank',
        C: '#forge:rods/iron'
    }).id('ad_astra:recipes/ostrum_tank')
    //替换配方：耐热燃料储罐
    event.shaped('ad_astra:calorite_tank', [
        'AA ',
        'ABC',
        'AA '
    ], {
        A: 'ad_astra:calorite_plate',
        B: 'create:fluid_tank',
        C: '#forge:rods/iron'
    }).id('ad_astra:recipes/calorite_tank')
    //替换配方：喷气式航天服
    event.shaped('ad_astra:jet_suit', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'ad_astra:calorite_plate',
        B: 'create_sa:brass_jetpack_chestplate',
        C: 'ad_astra:calorite_tank',
        D: 'ad_astra:netherite_space_suit',
        E: 'ad_astra:calorite_block',
        F: 'ad_astra:calorite_engine'
    }).id('ad_astra:recipes/jet_suit')
    //替换配方：充能器
    event.shaped('ad_astra:energizer', [
        'ABA',
        'ACA',
        'DAD'
    ], {
        A: 'ad_astra:ostrum_plate',
        B: 'create:depot',
        C: 'createaddition:tesla_coil',
        D: 'createaddition:modular_accumulator'
    }).id('ad_astra:recipes/energizer')
    //替换配方：凛冰冻结装置
    event.shaped('ad_astra:cryo_freezer', [
        'ABA',
        'BCB',
        'DBD'
    ], {
        A: 'ad_astra:engine_fan',
        B: 'ad_astra:ostrum_ingot',
        C: 'ad_astra:ostrum_tank',
        D: 'createaddition:modular_accumulator'
    }).id('ad_astra:recipes/cryo_freezer')
    //替换配方：氧气装载机
    event.shaped('ad_astra:oxygen_loader', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'alloyed:steel_sheet',
        B: 'ad_astra:engine_fan',
        C: 'ad_astra:oxygen_tank',
        D: 'minecraft:lightning_rod',
        E: 'createaddition:modular_accumulator'
    }).id('ad_astra:recipes/oxygen_loader')
    //替换配方：燃油精炼机
    event.shaped('ad_astra:fuel_refinery', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'alloyed:steel_sheet',
        B: 'create:fluid_tank',
        C: 'minecraft:furnace'
    }).id('ad_astra:recipes/fuel_refinery')
    //替换配方：太阳能板
    event.shaped('ad_astra:solar_panel', [
        'AAA',
        'BCB',
        'CDC'
    ], {
        A: 'minecraft:blue_stained_glass',
        B: 'alloyed:steel_sheet',
        C: 'ad_astra:desh_plate',
        D: 'createaddition:modular_accumulator'
    }).id('ad_astra:recipes/solar_panel')
    //替换配方：紫金引擎
    event.shaped('ad_astra:ostrum_engine', [
        'ABA',
        ' C ',
        ' D '
    ], {
        A: 'ad_astra:ostrum_plate',
        B: 'ulterlands:etherite',
        C: 'ad_astra:engine_frame',
        D: 'ad_astra:engine_fan'
    }).id('ad_astra:recipes/ostrum_engine')
    //替换配方：耐热金属引擎
    event.shaped('ad_astra:calorite_engine', [
        'ABA',
        ' C ',
        ' D '
    ], {
        A: 'ad_astra:calorite_plate',
        B: 'ulterlands:etherite',
        C: 'ad_astra:engine_frame',
        D: 'ad_astra:engine_fan'
    }).id('ad_astra:recipes/calorite_engine')
    //增加配方：强化深板岩
    event.shaped('4x minecraft:reinforced_deepslate', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'minecraft:ancient_debris',
        B: 'minecraft:deepslate',
        C: 'minecraft:nether_star'
    })
    //替换配方：堆叠升级T1
    event.shaped('sophisticatedbackpacks:stack_upgrade_tier_1', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:iron_ingot',
        B: 'sophisticatedbackpacks:upgrade_base'
    }).id('sophisticatedbackpacks:stack_upgrade_tier_1')
    //替换配方：堆叠升级T2
    event.shaped('sophisticatedbackpacks:stack_upgrade_tier_2', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:gold_ingot',
        B: 'sophisticatedbackpacks:stack_upgrade_tier_1'
    }).id('sophisticatedbackpacks:stack_upgrade_tier_2')
    //替换配方：堆叠升级T3
    event.shaped('sophisticatedbackpacks:stack_upgrade_tier_3', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:diamond',
        B: 'sophisticatedbackpacks:stack_upgrade_tier_2'
    }).id('sophisticatedbackpacks:stack_upgrade_tier_3')
    //替换配方：堆叠升级T4
    event.shaped('sophisticatedbackpacks:stack_upgrade_tier_4', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:netherite_ingot',
        B: 'sophisticatedbackpacks:stack_upgrade_tier_3'
    }).id('sophisticatedbackpacks:stack_upgrade_tier_4')
    //替换配方：喂食升级
    event.shaped('sophisticatedbackpacks:feeding_upgrade', [
        'ABA',
        'CDE',
        'AFA'
    ], {
        A: 'ad_astra:cheese',
        B: 'minecraft:golden_carrot',
        C: 'minecraft:golden_apple',
        D: 'sophisticatedbackpacks:upgrade_base',
        E: 'minecraft:glistering_melon_slice',
        F: 'minecraft:ender_pearl'
    }).id('sophisticatedbackpacks:feeding_upgrade')
})
