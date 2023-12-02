import { NgModule } from "@angular/core";
import { AuthPagesModule } from "./authPages";
import { HomePageModule } from "./homePage";
import { UploadFilePageModule } from "./uploadFilePage";


@NgModule({
    imports: [AuthPagesModule, HomePageModule, UploadFilePageModule],
})
export class AppPagesModule {}
