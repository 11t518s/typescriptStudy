type PageInfo = {
  title: string;
};

type Page = "home" | "about" | "contact";

const nav: Partial<Record<Page, PageInfo>> = {
  home: { title: "test" },
  about: { title: "test12" },
};
