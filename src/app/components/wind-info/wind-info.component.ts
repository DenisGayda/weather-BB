import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-wind-info',
	templateUrl: './wind-info.component.html',
	styleUrls: ['./wind-info.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WindInfoComponent {
	@Input() speed = 0;
	@Input() deg = 0;
}
