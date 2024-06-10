describe("Sipariş Sayfasına gidip; formu tam doldurarak sipariş başarı ile oluşturulacak.", () => {
  it("Form Sayfasına geçiş yap; ACIKTIM BUTONU İLE.. Siparişi Başarı ile tamamla!", () => {
    cy.visit("http://localhost:5173/");

    cy.contains("ACIKTIM").click();

    cy.get('[type="checkbox"]').check([
      "Pepperoni",
      "Domates",
      "Sucuk",
      "Soğan",
      "Mısır",
    ]);

    cy.get("select").select("Kalın");

    cy.get('[type="radio"]').first().check();

    cy.get("#exampleText").type("Position: Acılı Pizza Siparişi");

    cy.get("#exampleAdSoyad").type("Ali Can SADELER / Pizza Proje");

    for (let i = 1; i < 5; i++) {
      cy.get("[data-cy=pizzaArtır]").click();
    }

    for (let i = 1; i < 3; i++) {
      cy.get("[data-cy=pizzaAzalt]").click();
    }
  });
});

describe("Chechbox'lar için hata mesajı doğru çalışıyor mu ?", () => {
  it("En az 4 adet seçiminde hata mesajı görülmeli", () => {
    cy.visit("http://localhost:5173/orderpage");

    cy.get("select").select("Kalın");

    cy.get('[type="radio"]').first().check();

    cy.get("#exampleText").type("Position: Acılı Pizza Siparişi");

    cy.get("#exampleAdSoyad").type("Ali Can SADELER / Pizza Proje");

    cy.get('[type="checkbox"]').check(["Pepperoni", "Domates"]);

    cy.get("[data-cy=SiparişButon]").click();

    cy.get("[data-cy=ekMalzemeErrors]").should("be.visible");
  });

  it("En fazla 10 adet seçimde hata mesajı görülmeli", () => {
    cy.visit("http://localhost:5173/orderpage");

    cy.get("select").select("Kalın");

    cy.get('[type="radio"]').first().check();

    cy.get('[type="checkbox"]').check();

    cy.get("#exampleText").type("Position: Acılı Pizza Siparişi");

    cy.get("#exampleAdSoyad").type("Ali Can SADELER / Pizza Proje");

    cy.get("[data-cy=SiparişButon]").click();

    cy.get("[data-cy=ekMalzemeErrors]").should("be.visible");
  });
});

describe("Pizza boyu için hata mesajları doğru çalışıyor mu?", () => {
  it("Boy seçmeden siparişi tamamlamaya çalış; Hata mesajı çıkmalı", () => {
    cy.visit("http://localhost:5173/orderpage");

    cy.get('[type="checkbox"]').check([
      "Pepperoni",
      "Domates",
      "Sucuk",
      "Soğan",
      "Mısır",
    ]);

    cy.get("select").select("Kalın");

    cy.get("#exampleText").type("Position: Acılı Pizza Siparişi");

    cy.get("#exampleAdSoyad").type("Ali Can SADELER / Pizza Proje");

    cy.get("[data-cy=SiparişButon]").click();

    cy.get("[data-cy=pizzaBoyErrors]").should("be.visible");
  });
});

describe("Hamur kalınlığı için hata mesajları doğru çalışıyor mu?", () => {
  it("Hamur tipi seçmeden siparişi tamamlamaya çalış; Hata mesajı çıkmalı", () => {
    cy.visit("http://localhost:5173/orderpage");

    cy.get('[type="checkbox"]').check([
      "Pepperoni",
      "Domates",
      "Sucuk",
      "Soğan",
      "Mısır",
    ]);

    cy.get('[type="radio"]').first().check();

    cy.get("#exampleText").type("Position: Acılı Pizza Siparişi");

    cy.get("#exampleAdSoyad").type("Ali Can SADELER / Pizza Proje");

    cy.get("[data-cy=SiparişButon]").click();

    cy.get("[data-cy=hamurErrors]").should("be.visible");
  });
});

describe("Sipariş Sayfasına gidip; Ad Soyad Bölümü için 3 karakterden az olursa hata veriyor/Fazla olursa doğru çalışıyor?", () => {
  it("Form Sayfasına geçiş yap; Ad soyad 3 karakterden az girince hata veriyor", () => {
    cy.visit("http://localhost:5173/");

    cy.contains("ACIKTIM").click();

    cy.get('[type="checkbox"]').check([
      "Pepperoni",
      "Domates",
      "Sucuk",
      "Soğan",
      "Mısır",
    ]);

    cy.get("select").select("Kalın");

    cy.get('[type="radio"]').first().check();

    cy.get("#exampleText").type("Position: Acılı Pizza Siparişi");

    cy.get("#exampleAdSoyad").type("al");

    cy.get("[data-cy=SiparişButon]").click();

    cy.get("[data-cy=ekMalzemeAdSoyad]").should("be.visible");
  });
});

describe("Siparişin başarılı olması durumunda doğru sayfaya yönleniyor/Ücret Doğru bir şekilde hesaplanıyor", () => {
  it("Form Sayfası doldur / Succes sayfası geliyor / Ücret Bilgileri Doğru", () => {
    cy.visit("http://localhost:5173/");

    cy.contains("ACIKTIM").click();

    cy.get('[type="checkbox"]').check([
      "Pepperoni",
      "Domates",
      "Sucuk",
      "Soğan",
      "Mısır",
    ]);

    cy.get("select").select("Kalın");

    cy.get('[type="radio"]').first().check();

    cy.get("#exampleText").type("Position: Acılı Pizza Siparişi");

    cy.get("#exampleAdSoyad").type("Ali Can SADELER / Pizza Proje");

    for (let i = 1; i < 5; i++) {
      cy.get("[data-cy=pizzaArtır]").click();
    }

    for (let i = 1; i < 3; i++) {
      cy.get("[data-cy=pizzaAzalt]").click();
    }

    cy.get("[data-cy=SiparişButon]").click();

    cy.url().should("eq", "http://localhost:5173/success");

    cy.contains("25₺").should("be.visible");
    cy.contains("281.5₺").should("be.visible");
  });
});
