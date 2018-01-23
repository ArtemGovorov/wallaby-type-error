import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { UsersComponent } from "./users.component";

describe("UsersComponent", () => {
  let fixture: ComponentFixture<UsersComponent>;
  let comp: UsersComponent;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [UsersComponent]
      });
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    comp = fixture.componentInstance;
    comp.users = [{ name: "bob", age: 100 }];
  });

  it("should mount", () => {
    expect(comp.users).toEqual([{ name: "bob", age: 100 }]);
  });
});
