import RandomRoll from 'random/RandomRoll.js'
import Nd6 from 'random/Nd6.js'
import AmmoList from 'lists/gear/AmmoList.js'

export default (c) => {
    const compatibleAmmo = AmmoList.filter(a => a.cal == c.gear.ranged.inventory[0].cal)
    const randomAmmo = RandomRoll(compatibleAmmo)
    randomAmmo.qty = Nd6(1)
    c.gear.ammo.inventory.push(randomAmmo)
    return c
}