import RandomRoll from 'random/RandomRoll.js'
import Traits from 'rules/Traits.js'

export default (c) => {
    c.resetTraits()
    while(Traits.remaining(c) > 0) {
        const t = RandomRoll(Object.keys(c.traits))
        if (c.traits[t].score < Traits.maxPoints) c.traits[t].score++
    }
    return c
}