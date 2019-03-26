/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * Stanford diagram plugin option class
 * @class StanfordOptions
 * @param {Options} options Stanford plugin options
 * @extends Plugin
 * @return {StanfordOptions}
 * @private
 */
export default class Options {
	constructor() {
		return {

			/**
			 * Set the color of the color scale. This function receives a value between 0 and 1, and should return a color.
			 * @name colors
			 * @memberof plugin-stanford
			 * @type {Function}
			 * @default undefined
			 * @example
			 *   colors: d3.interpolateHslLong(
			 *      d3.hsl(250, 1, 0.5), d3.hsl(0, 1, 0.5)
			 *   )
			 */
			colors: undefined,

			/**
			 * Specify the key of epochs values in the data.
			 * @name epochs
			 * @memberof plugin-stanford
			 * @type {Array}
			 * @default []
			 * @example
			 * 	epochs: [ 1, 1, 2, 2, ... ]
			*/
			epochs: [],

			/**
			 * Show additional lines anywhere on the chart.
			 * - Each line object should consist with following options:
			 *
		 	 * | Key | Type | Description |
			 * | --- | --- | --- |
			 * | x1 | Number | Starting position on the x axis |
			 * | y1 | Number | Starting position on the y axis |
			 * | x2 | Number | Ending position on the x axis  |
			 * | y2 | Number | Ending position on the y axis |
			 * | class | String | Optional value. Set a custom css class to this line. |
			 * @type {Array}
			 * @memberof plugin-stanford
			 * @default []
			 * @example
			 *   lines: [
			 *       { x1: 0, y1: 0, x2: 65, y2: 65, class: "line1" },
			 *       { x1: 0, x2: 65, y1: 40, y2: 40, class: "line2" }
			 *   ]
			 */
			lines: [],

			/**
			 * Set scale values
			 * @name scale
			 * @memberof plugin-stanford
			 * @type {Object}
 			 * @property {Number} [scale.min=undefined] Minimum value of the color scale. Default: lowest value in epochs
			 * @property {Number} [scale.max=undefined] Maximum value of the color scale. Default: highest value in epochs
			 * @property {Number} [scale.width=20] Width of the color scale
			 * @property {String|Function} [scale.format=undefined] Format of the axis of the color scale. Use 'pow10' to format as powers of 10 or a custom function. Example: d3.format("d")
			 * @example
			 *  scale: {
			 *    max: 10000,
			 *    min: 1,
			 *    width: 500,
			 *    format: "pow10"
			 *  },
			 */
			scale_min: undefined,
			scale_max: undefined,
			scale_width: 20,
			scale_format: undefined,

			/**
			 * The padding for color scale element
			 * @name padding
			 * @memberof plugin-stanford
			 * @type {Object}
			 * @property {Number} [padding.top=0] Top padding value.
			 * @property {Number} [padding.right=0] Right padding value.
			 * @property {Number} [padding.bottom=0] Bottom padding value.
			 * @property {Number} [padding.left=0] Left padding value.
			 * @example
			 *  padding: {
			 *     top: 15,
			 *     right: 0,
			 *     bottom: 0,
			 *     left: 0
			 *  },
			 */
			padding_top: 0,
			padding_right: 0,
			padding_bottom: 0,
			padding_left: 0,

			/**
			 * Show additional regions anywhere on the chart.
			 * - Each region object should consist with following options:
			 *
			 * | Key | Type | Default | Description |
			 * | --- | --- | --- | --- |
			 * | points | Array |  | Accepts a group of objects that has x and y.<br>These points should be added in a counter-clockwise fashion to make a closed polygon. |
			 * | opacity | Number | 0.2 | Optional value. Sets the opacity of the region as value between 0 and 1 |
			 * | text | Function |  | Optional value. This function receives a value and percentage of the number of epochs in this region.<br>Return a string to place text in the middle of the region. |
			 * | class | String | | Optional value. Set a custom css class to this region, use the fill property in css to set a background color. |
			 * @name regions
			 * @memberof plugin-stanford
			 * @type {Array}
			 * @default []
			 * @example
			 *   regions: [
			 *       {
			 *           points: [ // add points counter-clockwise
			 *               { x: 0, y: 0 },
			 *               { x: 40, y: 40 },
			 *               { x: 0, y: 40 },
			 *           ],
			 *           text: function (value, percentage) {
			 *               return `Normal Operations: ${value} (${percentage}%)`;
			 *           },
			 *           opacity: 0.2, // 0 to 1
			 *           class: "test-polygon1"
		 	 *       },
			 *       ...
			 *   ]
			 */
			regions: []
		};
	}
}
