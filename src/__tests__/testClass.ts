export default class TestClass {

	private _text: string;
	public get Text(): string {
		return this._text;
	}
	public set Text(v: string) {
		this._text = v;
	}


	private _number: number;
	public get Number(): number {
		return this._number;
	}
	public set Number(v: number) {
		this._number = v;
	}

}