import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "prettyNumbers"
})

export class PrettyNumbers implements PipeTransform {

    transform(value: string) {

    }
}