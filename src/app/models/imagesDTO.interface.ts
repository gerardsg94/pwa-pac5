import { 
    DownsizedDTO,
    DownsizedLargeDTO,
    DownsizedMediumDTO,
    DownsizedSmallDTO,
    DownsizedStillDTO,
    FixedHeightDownsampledDTO,
    FixedHeightDTO,
    FixedHeightSmallDTO,
    FixedHeightSmallStillDTO,
    FixedHeightStillDTO,
    FixedWidthDownsampledDTO,
    FixedWidthDTO,
    FixedWidthSmallDTO,
    FixedWidthSmallStillDTO,
    FixedWidthStillDTO,
    HdDTO,
    LoopingDTO,
    OriginalDTO,
    OriginalMp4DTO,
    OriginalStillDTO,
    PreviewDTO,
    PreviewGifDTO,
    PreviewWebpDTO,
    wStillDTO
} from "./imagesFormat";



export interface ImagesDTO {
    hd: HdDTO;
    fixed_width_still: FixedWidthStillDTO;
    fixed_height_downsampled: FixedHeightDownsampledDTO;
    preview_gif: PreviewGifDTO;
    preview: PreviewDTO;
    fixed_height_small: FixedHeightSmallDTO;
    downsized: DownsizedDTO;
    fixed_width_downsampled: FixedWidthDownsampledDTO;
    fixed_width: FixedWidthDTO;
    downsized_still: DownsizedStillDTO;
    downsized_medium: DownsizedMediumDTO;
    original_mp4: OriginalMp4DTO;
    downsized_large: DownsizedLargeDTO;
    preview_webp: PreviewWebpDTO;
    original: OriginalDTO;
    original_still: OriginalStillDTO;
    fixed_height_small_still: FixedHeightSmallStillDTO;
    fixed_width_small: FixedWidthSmallDTO;
    looping: LoopingDTO;
    downsized_small: DownsizedSmallDTO;
    fixed_width_small_still: FixedWidthSmallStillDTO;
    fixed_height_still: FixedHeightStillDTO;
    fixed_height: FixedHeightDTO;
    w_still: wStillDTO;
}