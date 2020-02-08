import AccessoryList from './gear/weapons/AccessoryList'
import AmmoList from './gear/weapons/AmmoList'
import ArmorList from './gear/ArmorList'
import BombList from './gear/weapons/BombList'
import DocumentList from './gear/DocumentList'
import DrugsList from './gear/DrugsList'
import ElectronicsList from './gear/ElectronicsList'
import EquipmentList from './gear/EquipmentList'
import MedicalList from './gear/MedicalList'
import MeleeWeaponList from './gear/weapons/MeleeWeaponList'
import RangedWeaponList from './gear/weapons/RangedWeaponList'
import StorageList from './gear/StorageList'
// export { VehicleList } from '../../components/rules//gear/Vehicles'

export const WeaponList = [
	...MeleeWeaponList,
	...RangedWeaponList
]

const MasterGearList = [
	...AccessoryList,
	...AmmoList,
	...ArmorList,
	...BombList,
	...DocumentList,
	...DrugsList,
	...ElectronicsList,
	...EquipmentList,
	...MedicalList,
	...StorageList,
	...WeaponList
]

export default MasterGearList