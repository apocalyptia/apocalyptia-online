import * as sapper from '@sapper/app'

export default class TableOfContents {
	constructor(name='', root='/', chapters=[], modules=[]) {
		this.name = name,
		this.root = root,
		this.chapters = chapters,
		this.modules = modules,
		this.starting = -1,
		this.current = this.starting
	}
	back() {
		this.current--
		if (this.current > this.starting) this.go(this.current)
		else this.home()
	}
	go(index) {
		this.current = index
		sapper.goto(`${this.root}/${this.chapters[index].toLowerCase()}`)
	}
	home() {
		this.reset()
		sapper.goto(this.root)
	}
	next() {
		this.current++
		if (this.current < this.chapters.length) this.go(this.current)
		else this.home()
	}
	reset() {
		this.current = this.starting
	}
}