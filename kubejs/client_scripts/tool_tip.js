let tooltips = [
    ["cgm:workbench", "§4请不要拿出来,会崩溃!!!", "§4Please don't take it out, it will collapse!!!"],
    ["vinery:cherry_boat", "§4请不要拿出来,会崩溃!!!", "§4Please don't take it out, it will collapse!!!"],
    ["vinery:cherry_chest_boat", "§4请不要拿出来,会崩溃!!!", "§4Please don't take it out, it will collapse!!!"],
    ["vinery:grapevine_stem", "§4请不要拿出来,会崩溃!!!", "§4Please don't take it out, it will collapse!!!"],
    ["nethervinery:obsidian_stem", "§4请不要拿出来,会崩溃!!!", "§4Please don't take it out, it will collapse!!!"],
]
ItemEvents.tooltip(e => {
    for (let i = 0; i < tooltips.length(); i++){
        e.add(tooltips[i][0], Text.translate(`${tooltips[i][0]}`))
    }
})

ClientEvents.lang("zh_cn", e => {
    for (let z = 0; z < tooltips.length(); z++){
        e.add(`${tooltips[z][0]}`, tooltips[z][1])
    }
})

ClientEvents.lang("en_us", e => {
    for (let u = 0; u < tooltips.length(); u++){
        e.add(`${tooltips[u][0]}`, tooltips[u][2])
    }
})








// ItemEvents.tooltip(e => {
//     // e.add('cgm:workbench', Text.translate("tooltip.cgm.workbench"))
//     // e.add('vinery:cherry_boat', Text.translate("tooltip.vinery.cherry_boat"))
//     // e.add('vinery:cherry_chest_boat', Text.translate("tooltip.vinery.cherry_chest_boat"))
//     // e.add('vinery:grapevine_stem', Text.translate("tooltip.vinery.grapevine_stem"))
//     // e.add('nethervinery:obsidian_stem', Text.translate("tooltip.nethervinery.obsidian_stem"))
//     e.add('alloyed:steel_ingot', Text.translate("tooltip.alloyed.steel_ingot"))
//     e.add('brewinandchewin:keg', Text.translate("tooltip.brewinandchewin.keg"))
//     e.add('createdieselgenerators:oil_barrel', Text.translate("tooltip.createdieselgenerators.oil_barrel"))
// })