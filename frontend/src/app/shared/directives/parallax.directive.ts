import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  AfterViewInit
} from '@angular/core';

@Directive({
  selector: '[parallax]',
  standalone: true
})
export class ParallaxDirective implements AfterViewInit, OnDestroy {
  @Input() parallaxStrength = 20; // px
  private observer!: IntersectionObserver;
  private isVisible = false;
  private rafId: number | null = null;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        this.isVisible = entry.isIntersecting;
        if (this.isVisible) {
          this.start();
        } else {
          this.stop();
        }
      },
      { threshold: 0.1 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  private start() {
    const element = this.el.nativeElement;
    const baseOffset = element.getBoundingClientRect().top + window.scrollY;

    const animate = () => {
      if (!this.isVisible) return;

      const scrollY = window.scrollY;
      const delta = scrollY - baseOffset;
      const translate = Math.max(
        -this.parallaxStrength,
        Math.min(this.parallaxStrength, delta * 0.08)
      );

      element.style.transform = `translateY(${translate}px)`;
      this.rafId = requestAnimationFrame(animate);
    };

    animate();
  }

  private stop() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.rafId = null;
  }

  ngOnDestroy() {
    this.stop();
    this.observer?.disconnect();
  }
}
