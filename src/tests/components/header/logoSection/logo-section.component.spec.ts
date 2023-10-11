import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { LogoSectionComponent } from "src/app/components";

describe('logo-section.component', () => {
    let component: LogoSectionComponent;
    let fixture: ComponentFixture<LogoSectionComponent>;
    let nativeElement: HTMLElement;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [LogoSectionComponent]
      });
      fixture = TestBed.createComponent(LogoSectionComponent);
      component = fixture.componentInstance;
      nativeElement = fixture.nativeElement;
    });
  
    it('should generate elements correctrly', () => {
    const logoText = nativeElement.querySelector('.logoText');
    const svgLogo = nativeElement.querySelector('.headerLogo');

      expect(logoText?.textContent).toContain('CloudStorage');
      expect(svgLogo?.getAttribute('src')).toContain('cloudIcon.svg');

    });
});