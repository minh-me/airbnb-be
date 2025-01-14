import { TestModule } from "./0-tests/test.module";
import { CategoryModule } from "./1-categories/category.module";
import { ListingModule } from "./2-listings/listing.module";
import { BookingModule } from "./3-bookings/booking.module";
import { ReviewModule } from "./4-reviews/review.module";
import { GiftModule } from "./7-gifts/gift.module";
import { AuthModule } from "./pre-built/1-auth/auth.module";
import { UserModule } from "./pre-built/1-users/user.module";
import { WardModule } from "./pre-built/10-wards/ward.module";
import { SettingModule } from "./pre-built/11-settings/setting.module";
import { NotificationModule } from "./pre-built/12-notifications/notification.module";
import { UserGroupModule } from "./pre-built/2-user-groups/user-group.module";
import { PolicyModule } from "./pre-built/3-policies/policy.module";
import { PolicyGroupModule } from "./pre-built/3-policy-groups/policy-group.module";
import { MenuGroupModule } from "./pre-built/4-menu-groups/menu-group.module";
import { MenuModule } from "./pre-built/4-menus/menu.module";
import { SystemMenuModule } from "./pre-built/4-system-menus/system-menu.module";
import { TokenModule } from "./pre-built/5-tokens/token.module";
import { OtpModule } from "./pre-built/6-otp/otp.module";
import { UploadModule } from "./pre-built/7-uploads/upload.module";
import { UserFileModule } from "./pre-built/7-user-files/user-file.module";
import { ProvinceModule } from "./pre-built/8-provinces/province.module";
import { DistrictModule } from "./pre-built/9-districts/district.module";

export const RouteModules = [
	// pre-built
	AuthModule,
	UserModule,
	UserGroupModule,
	PolicyModule,
	PolicyGroupModule,
	MenuGroupModule,
	MenuModule,
	SystemMenuModule,
	TokenModule,
	OtpModule,
	UploadModule,
	UserFileModule,
	ProvinceModule,
	DistrictModule,
	WardModule,
	SettingModule,
	NotificationModule,

	// features
	TestModule,
	CategoryModule,
	ListingModule,
	BookingModule,
	ReviewModule,
	GiftModule,
];
