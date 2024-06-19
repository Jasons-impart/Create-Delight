ServerEvents.recipes(e => {
    e.remove({ output: 'vinery:cherry_boat' })
    e.remove({ input: 'vinery:cherry_boat' })
    e.remove({ input: 'beachparty:palm_boat' })
    e.remove({ output: 'beachparty:palm_boat' })
})