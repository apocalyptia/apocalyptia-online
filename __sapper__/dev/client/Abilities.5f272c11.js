import { X as XP3Abilities, a as XP6Abilities, b as XP9Abilities, c as XP12Abilities, d as XP15Abilities, e as XP18Abilities, f as XP24Abilities, g as XP30Abilities, A as AppendToGUUID, h as Ability } from './AppendToGUUID.176d1458.js';
import { P as PropSort } from './Skills.35c4252b.js';
import { R as RandomRoll } from './RandomRoll.f18d347c.js';

const abilityArray = [
	...XP3Abilities,
	...XP6Abilities,
	...XP9Abilities,
	...XP12Abilities,
	...XP15Abilities,
	...XP18Abilities,
	...XP24Abilities,
	...XP30Abilities
];

const completeAbilityListBuilder = (list) => {
	const newList = [];
	for (let i = 0; i < list.length; ++i) {
		if (list[i].opts[0]) {
			for (let o = 0; o < list[i].opts.length; ++o) {
				let newGUUID = AppendToGUUID(list[i].id, list[i].opts[o].name);
				const newAbility = new Ability({
					id: newGUUID,
					name: list[i].name,
					desc: list[i].desc,
					max: list[i].max,
					xp: list[i].xp,
					taken: list[i].taken,
					opts: [
						list[i].opts[o],
					],
					selection: o
				});
				newList.push(newAbility);
			}
		} else {
			const newAbility = new Ability({
				id: list[i].id,
				name: list[i].name,
				desc: list[i].desc,
				max: list[i].max,
				xp: list[i].xp,
				taken: list[i].taken
			});
			newList.push(newAbility);
		}
	}
	return newList
};

const Abilities = {
	name: `Abilities`,
	explanation: [
		`Abilities are Character upgrades purchased with XP.`
	],
	groups: [
		{
			name: 3,
			visible: false,
			list: XP3Abilities
		},
		{
			name: 6,
			visible: false,
			list: XP6Abilities
		},
		{
			name: 9,
			visible: false,
			list: XP9Abilities
		},
		{
			name: 12,
			visible: false,
			list: XP12Abilities
		},
		{
			name: 15,
			visible: false,
			list: XP15Abilities
		},
		{
			name: 18,
			visible: false,
			list: XP18Abilities
		},
		{
			name: 24,
			visible: false,
			list: XP24Abilities
		},
		{
			name: 30,
			visible: false,
			list: XP30Abilities
		},
	],
	list: abilityArray.sort((a, b) => PropSort(a, b, 'name')),
	masterList: completeAbilityListBuilder(abilityArray).sort((a, b) => PropSort(a, b, 'name')),
	remainingXP: (c) => {
		if (c.abilities.length) {
			c.props.experience.spent = c.abilities.reduce((t, n) => t += (n.taken * n.xp), 0);
		}
		c.props.experience.remaining = c.props.experience.score - c.props.experience.spent;
		return c
	},
	random: function(c) {
		c = this.reset(c);
		while(c.props.experience.remaining > 0) {
			const remainingAbilities = this.masterList.filter(m => {
				return m.xp <= c.props.experience.remaining &&
					!c.abilities.includes(m)
			});
			if (remainingAbilities.length) {
				const a = RandomRoll(remainingAbilities);
				a.taken++;
				c.abilities.push(a);
				c.props.experience.remaining -= a.xp;
			}
			else break
		}
		return c
	},
	reset: function(c) {
		for (let a = 0; a < c.abilities.length; ++a) {
			c.abilities[a].taken = 0;
		}
		c.abilities = [];
		return c
	}
};

const AbilitiesList = completeAbilityListBuilder(Abilities);

export { Abilities as A };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJpbGl0aWVzLjVmMjcyYzExLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9ydWxlcy9hYmlsaXRpZXMvQWJpbGl0aWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYmlsaXR5IGZyb20gJ3J1bGVzL2FiaWxpdGllcy9BYmlsaXR5LmpzJ1xuaW1wb3J0IFByb3BTb3J0IGZyb20gJ3V0aWxzL1Byb3BTb3J0LmpzJ1xuaW1wb3J0IFhQM0FiaWxpdGllcyBmcm9tICdydWxlcy9hYmlsaXRpZXMvWFAzQWJpbGl0aWVzLmpzJ1xuaW1wb3J0IFhQNkFiaWxpdGllcyBmcm9tICdydWxlcy9hYmlsaXRpZXMvWFA2QWJpbGl0aWVzLmpzJ1xuaW1wb3J0IFhQOUFiaWxpdGllcyBmcm9tICdydWxlcy9hYmlsaXRpZXMvWFA5QWJpbGl0aWVzLmpzJ1xuaW1wb3J0IFhQMTJBYmlsaXRpZXMgZnJvbSAncnVsZXMvYWJpbGl0aWVzL1hQMTJBYmlsaXRpZXMuanMnXG5pbXBvcnQgWFAxNUFiaWxpdGllcyBmcm9tICdydWxlcy9hYmlsaXRpZXMvWFAxNUFiaWxpdGllcy5qcydcbmltcG9ydCBYUDE4QWJpbGl0aWVzIGZyb20gJ3J1bGVzL2FiaWxpdGllcy9YUDE4QWJpbGl0aWVzLmpzJ1xuaW1wb3J0IFhQMjRBYmlsaXRpZXMgZnJvbSAncnVsZXMvYWJpbGl0aWVzL1hQMjRBYmlsaXRpZXMuanMnXG5pbXBvcnQgWFAzMEFiaWxpdGllcyBmcm9tICdydWxlcy9hYmlsaXRpZXMvWFAzMEFiaWxpdGllcy5qcydcbmltcG9ydCBBcHBlbmRUb0dVVUlEIGZyb20gJ3V0aWxzL0FwcGVuZFRvR1VVSUQuanMnXG5pbXBvcnQgUmFuZG9tUm9sbCBmcm9tICdyYW5kb20vUmFuZG9tUm9sbC5qcydcblxuXG5jb25zdCBhYmlsaXR5QXJyYXkgPSBbXG5cdC4uLlhQM0FiaWxpdGllcyxcblx0Li4uWFA2QWJpbGl0aWVzLFxuXHQuLi5YUDlBYmlsaXRpZXMsXG5cdC4uLlhQMTJBYmlsaXRpZXMsXG5cdC4uLlhQMTVBYmlsaXRpZXMsXG5cdC4uLlhQMThBYmlsaXRpZXMsXG5cdC4uLlhQMjRBYmlsaXRpZXMsXG5cdC4uLlhQMzBBYmlsaXRpZXNcbl1cblxuY29uc3QgY29tcGxldGVBYmlsaXR5TGlzdEJ1aWxkZXIgPSAobGlzdCkgPT4ge1xuXHRjb25zdCBuZXdMaXN0ID0gW11cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG5cdFx0aWYgKGxpc3RbaV0ub3B0c1swXSkge1xuXHRcdFx0Zm9yIChsZXQgbyA9IDA7IG8gPCBsaXN0W2ldLm9wdHMubGVuZ3RoOyArK28pIHtcblx0XHRcdFx0bGV0IG5ld0dVVUlEID0gQXBwZW5kVG9HVVVJRChsaXN0W2ldLmlkLCBsaXN0W2ldLm9wdHNbb10ubmFtZSlcblx0XHRcdFx0Y29uc3QgbmV3QWJpbGl0eSA9IG5ldyBBYmlsaXR5KHtcblx0XHRcdFx0XHRpZDogbmV3R1VVSUQsXG5cdFx0XHRcdFx0bmFtZTogbGlzdFtpXS5uYW1lLFxuXHRcdFx0XHRcdGRlc2M6IGxpc3RbaV0uZGVzYyxcblx0XHRcdFx0XHRtYXg6IGxpc3RbaV0ubWF4LFxuXHRcdFx0XHRcdHhwOiBsaXN0W2ldLnhwLFxuXHRcdFx0XHRcdHRha2VuOiBsaXN0W2ldLnRha2VuLFxuXHRcdFx0XHRcdG9wdHM6IFtcblx0XHRcdFx0XHRcdGxpc3RbaV0ub3B0c1tvXSxcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdHNlbGVjdGlvbjogb1xuXHRcdFx0XHR9KVxuXHRcdFx0XHRuZXdMaXN0LnB1c2gobmV3QWJpbGl0eSlcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgbmV3QWJpbGl0eSA9IG5ldyBBYmlsaXR5KHtcblx0XHRcdFx0aWQ6IGxpc3RbaV0uaWQsXG5cdFx0XHRcdG5hbWU6IGxpc3RbaV0ubmFtZSxcblx0XHRcdFx0ZGVzYzogbGlzdFtpXS5kZXNjLFxuXHRcdFx0XHRtYXg6IGxpc3RbaV0ubWF4LFxuXHRcdFx0XHR4cDogbGlzdFtpXS54cCxcblx0XHRcdFx0dGFrZW46IGxpc3RbaV0udGFrZW5cblx0XHRcdH0pXG5cdFx0XHRuZXdMaXN0LnB1c2gobmV3QWJpbGl0eSlcblx0XHR9XG5cdH1cblx0cmV0dXJuIG5ld0xpc3Rcbn1cblxuZXhwb3J0IGNvbnN0IEFiaWxpdGllcyA9IHtcblx0bmFtZTogYEFiaWxpdGllc2AsXG5cdGV4cGxhbmF0aW9uOiBbXG5cdFx0YEFiaWxpdGllcyBhcmUgQ2hhcmFjdGVyIHVwZ3JhZGVzIHB1cmNoYXNlZCB3aXRoIFhQLmBcblx0XSxcblx0Z3JvdXBzOiBbXG5cdFx0e1xuXHRcdFx0bmFtZTogMyxcblx0XHRcdHZpc2libGU6IGZhbHNlLFxuXHRcdFx0bGlzdDogWFAzQWJpbGl0aWVzXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiA2LFxuXHRcdFx0dmlzaWJsZTogZmFsc2UsXG5cdFx0XHRsaXN0OiBYUDZBYmlsaXRpZXNcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6IDksXG5cdFx0XHR2aXNpYmxlOiBmYWxzZSxcblx0XHRcdGxpc3Q6IFhQOUFiaWxpdGllc1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogMTIsXG5cdFx0XHR2aXNpYmxlOiBmYWxzZSxcblx0XHRcdGxpc3Q6IFhQMTJBYmlsaXRpZXNcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6IDE1LFxuXHRcdFx0dmlzaWJsZTogZmFsc2UsXG5cdFx0XHRsaXN0OiBYUDE1QWJpbGl0aWVzXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiAxOCxcblx0XHRcdHZpc2libGU6IGZhbHNlLFxuXHRcdFx0bGlzdDogWFAxOEFiaWxpdGllc1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogMjQsXG5cdFx0XHR2aXNpYmxlOiBmYWxzZSxcblx0XHRcdGxpc3Q6IFhQMjRBYmlsaXRpZXNcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6IDMwLFxuXHRcdFx0dmlzaWJsZTogZmFsc2UsXG5cdFx0XHRsaXN0OiBYUDMwQWJpbGl0aWVzXG5cdFx0fSxcblx0XSxcblx0bGlzdDogYWJpbGl0eUFycmF5LnNvcnQoKGEsIGIpID0+IFByb3BTb3J0KGEsIGIsICduYW1lJykpLFxuXHRtYXN0ZXJMaXN0OiBjb21wbGV0ZUFiaWxpdHlMaXN0QnVpbGRlcihhYmlsaXR5QXJyYXkpLnNvcnQoKGEsIGIpID0+IFByb3BTb3J0KGEsIGIsICduYW1lJykpLFxuXHRyZW1haW5pbmdYUDogKGMpID0+IHtcblx0XHRpZiAoYy5hYmlsaXRpZXMubGVuZ3RoKSB7XG5cdFx0XHRjLnByb3BzLmV4cGVyaWVuY2Uuc3BlbnQgPSBjLmFiaWxpdGllcy5yZWR1Y2UoKHQsIG4pID0+IHQgKz0gKG4udGFrZW4gKiBuLnhwKSwgMClcblx0XHR9XG5cdFx0Yy5wcm9wcy5leHBlcmllbmNlLnJlbWFpbmluZyA9IGMucHJvcHMuZXhwZXJpZW5jZS5zY29yZSAtIGMucHJvcHMuZXhwZXJpZW5jZS5zcGVudFxuXHRcdHJldHVybiBjXG5cdH0sXG5cdHJhbmRvbTogZnVuY3Rpb24oYykge1xuXHRcdGMgPSB0aGlzLnJlc2V0KGMpXG5cdFx0d2hpbGUoYy5wcm9wcy5leHBlcmllbmNlLnJlbWFpbmluZyA+IDApIHtcblx0XHRcdGNvbnN0IHJlbWFpbmluZ0FiaWxpdGllcyA9IHRoaXMubWFzdGVyTGlzdC5maWx0ZXIobSA9PiB7XG5cdFx0XHRcdHJldHVybiBtLnhwIDw9IGMucHJvcHMuZXhwZXJpZW5jZS5yZW1haW5pbmcgJiZcblx0XHRcdFx0XHQhYy5hYmlsaXRpZXMuaW5jbHVkZXMobSlcblx0XHRcdH0pXG5cdFx0XHRpZiAocmVtYWluaW5nQWJpbGl0aWVzLmxlbmd0aCkge1xuXHRcdFx0XHRjb25zdCBhID0gUmFuZG9tUm9sbChyZW1haW5pbmdBYmlsaXRpZXMpXG5cdFx0XHRcdGEudGFrZW4rK1xuXHRcdFx0XHRjLmFiaWxpdGllcy5wdXNoKGEpXG5cdFx0XHRcdGMucHJvcHMuZXhwZXJpZW5jZS5yZW1haW5pbmcgLT0gYS54cFxuXHRcdFx0fVxuXHRcdFx0ZWxzZSBicmVha1xuXHRcdH1cblx0XHRyZXR1cm4gY1xuXHR9LFxuXHRyZXNldDogZnVuY3Rpb24oYykge1xuXHRcdGZvciAobGV0IGEgPSAwOyBhIDwgYy5hYmlsaXRpZXMubGVuZ3RoOyArK2EpIHtcblx0XHRcdGMuYWJpbGl0aWVzW2FdLnRha2VuID0gMFxuXHRcdH1cblx0XHRjLmFiaWxpdGllcyA9IFtdXG5cdFx0cmV0dXJuIGNcblx0fVxufVxuXG5leHBvcnQgY29uc3QgQWJpbGl0aWVzTGlzdCA9IGNvbXBsZXRlQWJpbGl0eUxpc3RCdWlsZGVyKEFiaWxpdGllcylcblxuZXhwb3J0IGRlZmF1bHQgQWJpbGl0aWVzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFjQSxNQUFNLFlBQVksR0FBRztBQUNyQixDQUFDLEdBQUcsWUFBWTtBQUNoQixDQUFDLEdBQUcsWUFBWTtBQUNoQixDQUFDLEdBQUcsWUFBWTtBQUNoQixDQUFDLEdBQUcsYUFBYTtBQUNqQixDQUFDLEdBQUcsYUFBYTtBQUNqQixDQUFDLEdBQUcsYUFBYTtBQUNqQixDQUFDLEdBQUcsYUFBYTtBQUNqQixDQUFDLEdBQUcsYUFBYTtBQUNqQixFQUFDO0FBQ0Q7QUFDQSxNQUFNLDBCQUEwQixHQUFHLENBQUMsSUFBSSxLQUFLO0FBQzdDLENBQUMsTUFBTSxPQUFPLEdBQUcsR0FBRTtBQUNuQixDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO0FBQ3ZDLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ3ZCLEdBQUcsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO0FBQ2pELElBQUksSUFBSSxRQUFRLEdBQUcsYUFB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