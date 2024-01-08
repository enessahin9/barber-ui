import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class TemplateService {

    addBodyClass(cls: string): TemplateService {
        document.querySelector("body")?.classList.add(cls);
        return this;
    }

    removeBodyClass(cls: string): TemplateService {
        document.querySelector("body")?.classList.add(cls);
        return this;
    }

    getBodyClass(): string | undefined {
        return document.querySelector("body")?.classList.value
    }
}