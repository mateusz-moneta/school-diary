export class Time {
  private readonly parts = this.time.split(':');

  constructor(private time: string) {}

  get hour(): string {
    return this.parts[0];
  }

  get minute(): string {
    return this.parts[1];
  }
}
