// Use type safe message keys with `next-intl`
type Messages = typeof import("./dictionaries/translate/vi.json");
declare interface IntlMessages extends Messages {}
