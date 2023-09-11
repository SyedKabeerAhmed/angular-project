import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

   menu: { img1: string, img2: string, label: string }[] = [
    { img1: "../../../../assets/images/double-icons/DashboradIconblue.svg", img2: "../../../../assets/images/double-icons/DashboradIconGray.svg" , label: "Dashboard" },
    { img1: "../../../../assets/images/double-icons/task.svg", img2: "../../../../assets/images/double-icons/task.svg" , label: "Task" },
    { img1: "../../../../assets/images/double-icons/invoiceblue.svg", img2: "../../../../assets/images/double-icons/invoiceGray.svg" , label: "Invoice" },
    { img1: "../../../../assets/images/double-icons/cloudblue.svg", img2: "../../../../assets/images/double-icons/cloudGray.svg" , label: "Files" },
    { img1: "../../../../assets/images/double-icons/eventblue.svg", img2: "../../../../assets/images/double-icons/eventGray.svg" , label: "Events" },
    { img1: "../../../../assets/images/double-icons/termblue.svg", img2: "../../../../assets/images/double-icons/termGray.svg" , label: "Teams" },
    { img1: "../../../../assets/images/double-icons/messageblue.svg", img2: "../../../../assets/images/double-icons/messageGray.svg" , label: "Message" },
    { img1: "../../../../assets/images/double-icons/settingblue.svg", img2: "../../../../assets/images/double-icons/settingGray.svg" , label: "Settings" },

    // Add more objects as needed
  ];
}
