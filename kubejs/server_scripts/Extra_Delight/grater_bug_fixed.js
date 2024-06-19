    // extradelight的bug修复
ServerEvents.tags("item", e => {
    // 香肠相关
    e.add("forge:sausage", [
        'ratatouille:raw_sausage'
    ])
    e.add("forge:sausage/cooked", [
        'ratatouille:sausage'
    ])
    // 玉米面包增加extradeligt兼容
    e.add("forge:bread/sliced", [
        "extradelight:cornbread"
    ])
})
