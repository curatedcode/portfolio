import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "../utils/cn";

const buttonCva = cva(
	"inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-custom-blue-200/20 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 rounded-md px-3",
				lg: "h-11 rounded-md px-8",
				icon: "h-10 w-10"
			},
			variant: {
				default:
					"bg-custom-blue-200 text-custom-blue-300 hover:bg-custom-blue-100",
				destructive:
					"bg-custom-destructive text-custom-blue-200 hover:bg-custom-destructive/90",
				outline:
					"border border-custom-blue-200/20 bg-custom-blue-300 hover:bg-custom-blue-200 hover:text-custom-blue-300",
				secondary:
					"bg-custom-blue-200 text-custom-blue-300 hover:bg-custom-blue/80",
				ghost: "hover:bg-custom-blue-200 hover:text-custom-blue-300",
				/**
				 * NOTE: for underline to wrap properly make sure you have box-border (box-sizing: border-box) wrapping this
				 */
				link: "text-custom-blue-200 h-fit w-fit rounded-none font-semibold p-0 underline-slide"
			}
		},
		defaultVariants: {
			variant: "default",
			size: "default"
		}
	}
);

export const buttonVariants = (
	props?: VariantProps<typeof buttonCva> & { class?: string }
) => {
	const { class: className, ...variantProps } = props || {};
	return cn([buttonCva(variantProps), className]);
};

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
