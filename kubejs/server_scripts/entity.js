//阻止alexsmobs作怪
EntityEvents.spawned(event => {
    if (event.entity.type == 'alexsmobs:fly') {
        let dimension = event.entity.level.dimension
        let banned_dimensions = [
            'ad_astra:moon',
            'ad_astra:mars',
            'ad_astra:mercury',
            'ad_astra:venus',
            'ad_astra:glacio',
        ]
        banned_dimensions.forEach(banned_dimension => {
            if (dimension == banned_dimension)
                event.cancel()
        })
    }
})