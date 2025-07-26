"use client";

import React, { useRef, useState } from "react";

// Наборы символов
const PATTERNS = [
	{
		name: "Классика",
		chars: ["*", "#", "+", "@", "%", "$"],
	},
	{
		name: "Квадраты",
		chars: ["■", "□", "▪", "▫", "▲", "△"],
	},
	{
		name: "Весёлые",
		chars: ["☺", "☻", "♥", "♦", "♣", "♠"],
	},
];

// Happy Birthday to You (C C D C F E ...)
const HAPPY_BIRTHDAY_NOTES = [
	261.63,
	261.63,
	293.66,
	261.63,
	349.23,
	329.63, // C C D C F E
	261.63,
	261.63,
	293.66,
	261.63,
	392.0,
	349.23, // C C D C G F
	261.63,
	261.63,
	523.25,
	440.0,
	349.23,
	329.63,
	293.66, // C C C' A F E D
	466.16,
	466.16,
	440.0,
	349.23,
	392.0,
	349.23, // Bb Bb A F G F
];

const CANVAS_ROWS = 16;
const CANVAS_COLS = 32;

function playNote(frequency) {
	if (typeof window === "undefined") return;
	const ctx = new (window.AudioContext || window.webkitAudioContext)();
	const osc = ctx.createOscillator();
	osc.type = "sine";
	osc.frequency.value = frequency;
	osc.connect(ctx.destination);
	osc.start();
	osc.stop(ctx.currentTime + 0.2);
	osc.onended = () => ctx.close();
}

export default function ArtMusicCanvas({ dict }) {
	const [patternIdx, setPatternIdx] = useState(0);
	const [canvas, setCanvas] = useState(
		Array(CANVAS_ROWS)
			.fill()
			.map(() => Array(CANVAS_COLS).fill(" "))
	);
	const [drawing, setDrawing] = useState(false);
	const [charIdx, setCharIdx] = useState(0);
	const canvasRef = useRef(null);
	const tableRef = useRef(null);

	const pattern = PATTERNS[patternIdx];
	const [noteIdx, setNoteIdx] = useState(0);

	function handleDraw(row, col) {
		const newCanvas = canvas.map((r) => [...r]);
		newCanvas[row][col] = pattern.chars[charIdx];
		setCanvas(newCanvas);
		playNote(HAPPY_BIRTHDAY_NOTES[noteIdx]);
		setCharIdx((prev) => (prev + 1) % pattern.chars.length);
		setNoteIdx((prev) => (prev + 1) % HAPPY_BIRTHDAY_NOTES.length);
	}

	function handlePointerDown(e) {
		setDrawing(true);
		const { row, col } = getCellFromEvent(e);
		if (row !== null && col !== null) handleDraw(row, col);
	}

	function handlePointerUp() {
		setDrawing(false);
	}

	function handlePointerMove(e) {
		if (!drawing) return;
		const { row, col } = getCellFromEvent(e);
		if (row !== null && col !== null) handleDraw(row, col);
	}

	function getCellFromEvent(e) {
		const rect = tableRef.current.getBoundingClientRect();
		const clientX = e.touches ? e.touches[0].clientX : e.clientX;
		const clientY = e.touches ? e.touches[0].clientY : e.clientY;
		const x = clientX - rect.left;
		const y = clientY - rect.top;
		const col = Math.floor((x / rect.width) * CANVAS_COLS);
		const row = Math.floor((y / rect.height) * CANVAS_ROWS);
		if (row >= 0 && row < CANVAS_ROWS && col >= 0 && col < CANVAS_COLS) {
			return { row, col };
		}
		return { row: null, col: null };
	}

	function handleClear() {
		setCanvas(
			Array(CANVAS_ROWS)
				.fill()
				.map(() => Array(CANVAS_COLS).fill(" "))
		);
		setCharIdx(0);
		setNoteIdx(0);
	}

	function handleSwitchPattern() {
		setPatternIdx((prev) => (prev + 1) % PATTERNS.length);
		setCharIdx(0);
	}

	return (
		<section className="py-10 sm:py-16 bg-white">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="font-playfair text-3xl sm:text-4xl font-bold text-muted-olive text-center mb-6">
					{dict?.artMusicTitle}
				</h2>
				<div className="flex justify-center gap-4 mb-4">
					<button
						onClick={handleSwitchPattern}
						className="bg-terracotta text-white px-4 py-2 rounded shadow hover:bg-opacity-90"
					>
						{dict?.artMusicSwitch}: {pattern.name}
					</button>
					<button
						onClick={handleClear}
						className="bg-muted-olive text-white px-4 py-2 rounded shadow hover:bg-opacity-90"
					>
						{dict?.artMusicClear}
					</button>
				</div>
				<div
					ref={canvasRef}
					className="bg-gray-100 rounded-lg shadow-lg mx-auto"
					style={{
						width: "100%",
						maxWidth: 800,
						aspectRatio: `${CANVAS_COLS}/${CANVAS_ROWS}`,
						touchAction: "none",
						userSelect: "none",
						fontFamily: "monospace",
						fontSize: "1.2rem",
						cursor: "crosshair",
					}}
					onMouseDown={handlePointerDown}
					onMouseUp={handlePointerUp}
					onMouseMove={handlePointerMove}
					onTouchStart={handlePointerDown}
					onTouchEnd={handlePointerUp}
					onTouchMove={handlePointerMove}
				>
					<table
						ref={tableRef}
						style={{
							width: "100%",
							height: "100%",
							borderCollapse: "collapse",
						}}
					>
						<tbody>
							{canvas.map((rowArr, rowIdx) => (
								<tr key={rowIdx}>
									{rowArr.map((char, colIdx) => (
										<td
											key={colIdx}
											style={{
												width: "32px",
												height: "32px",
												minWidth: "32px",
												minHeight: "32px",
												maxWidth: "32px",
												maxHeight: "32px",
												textAlign: "center",
												verticalAlign: "middle",
												padding: 0,
												border: "1px solid #e5e7eb",
												background: char === " " ? "#f3f4f6" : "#fffbe6",
												transition: "background 0.2s",
												userSelect: "none",
											}}
										>
											{char}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<p className="text-center text-gray-500 mt-4">
					{dict?.artMusicDescription}
				</p>
			</div>
		</section>
	);
}
